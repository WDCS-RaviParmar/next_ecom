"use server";

import { z } from "zod";
import { CreateProductErrorSchema } from "./definitions";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// Zod product schema
const ZProductSchema = z.object({
  title: z
    .string()
    .min(1, "Product name is required")
    .max(100, "Description must contain at most 100 character(s)")
    .refine(
      (name) => !(name.length < 3),
      "Product name must contain at least 3 character(s)"
    ),
  price: z.number().positive("Please enter valid price"),
  description: z
    .string()
    .min(50, "Product Description must contain at least 50 character(s)")
    .max(300, "Product Description must contain at most 300 character(s)"),
  category: z
    .string()
    .refine((cat) => !(cat == "null"), "Please select categories"),
  image: z
    .object({
      size: z
        .number()
        .refine((size) => size <= 100000, "File size must be 1mb or less"),
      type: z.string(),
      name: z
        .string()
        .refine((iName) => iName != "undefined", "Product image is required"),
      lastModified: z.number(),
    })
    .required(),
});

// Zod product schema without product image validition
const ZProductSchemaWitoutImage = ZProductSchema.omit({ image: true });

// Create product server action
async function createProductAct(
  prevState: CreateProductErrorSchema,
  formData: FormData
) {
  try {
    // Getting product info from formData
    const formInfo = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      category: String(formData.get("category")),
      image: formData.get("image"),
    };

    // Checking zod validation
    const zRes = ZProductSchema.safeParse(formInfo);

    // Return zod error
    if (!zRes.success) {
      return {
        success: false,
        error: zRes.error.flatten().fieldErrors,
        message: "Note: Please resolve above message",
      };
    }

    let productResponse;
    try {
      const response: any = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(formInfo),
      });
      productResponse = await response.json(); // Response of API
    } catch (error) {
      return {
        success: false,
        error: error,
        message: "Server Error: There is some issue, Product is not created",
      };
    }

    // API For Create new product

    // Not Created Product
    if (!productResponse.id) {
      return {
        success: false,
        error: null,
        message: "Product not created: Internal server error",
      };
    }

    // Revaliditing Path
    revalidatePath("/admin/products");

    // Product Create successfully
    return {
      success: true,
      error: "null",
      message: "Product Created Successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      message: "Server Error: There is some issue, Product is not created",
    };
  }
}

async function updateProductAct(
  { image, productId }: { image: string; productId: number },
  prevState: CreateProductErrorSchema,
  formData: FormData
) {
  try {
    // Getting product info from formData
    const formInfo: any = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      category: String(formData.get("category")),
      image: formData.get("image"),
    };

    let zRes;

    // if user not updated product image then use previous image path which passing from props
    if (formInfo.image?.name == "undefined") {
      formInfo.image = image;
      zRes = ZProductSchemaWitoutImage.safeParse(formInfo);
    }
    // if user updated the product image then validate product info with main product schema
    else {
      zRes = ZProductSchema.safeParse(formInfo);
    }

    // Return zod error
    if (!zRes.success) {
      return {
        success: false,
        error: zRes.error.flatten().fieldErrors,
        message: "Note: Please resolve above errors",
      };
    }

    let productUpdateResponse;
    // API For Update a product
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
        {
          method: "PUT",
          body: JSON.stringify(formInfo),
        }
      );
      productUpdateResponse = await response.json();
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
        message: "Server Error: There is some issue, Product is not updated",
      };
    }

    // Not Created Product
    if (!productUpdateResponse.id) {
      return {
        success: false,
        error: null,
        message: "Product updated sucessfully",
      };
    }

    // Revaliditing Path
    revalidatePath("/admin/products");

    // Product update successfully
    return {
      success: true,
      error: null,
      message: "Product updated successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      message: "Server Error: There is some issue, Product is not updated",
    };
  }
}

async function deleteProductWithIdAct(id: number) {
  try {
    let deleteRes = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    deleteRes = await deleteRes.json();
    if (deleteRes) {
      return {
        success: true,
        message: "Product deleted successfully",
      };
    }
    return {
      success: false,
      message: "API Error: Product is not delete",
    };
  } catch (error) {
    return {
      message: "API Error: Product is not delete",
    };
  }
}

// Zod schema for login user
const zLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

async function loginAct(prevState: any, formData: FormData) {
  try {

    const userLoginFormInfo = { // Form Data
      username: formData.get("username"),
      password: formData.get("password"),
    };

    // Checking zod validation
    const zRes = zLoginSchema.safeParse(userLoginFormInfo);
    
    
    if(!zRes.success){ // If zod validation is faild
      return {
        success: false,
        error: zRes.error.flatten().fieldErrors,
        message: "Note: Please resolve above error"
      }
    }
    
    let loginResponse;
    try { // login api
      loginResponse = await fetch("https://fakestoreapi.com/auth/login",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(userLoginFormInfo),
      })
      loginResponse = await loginResponse.json()

      // If you don't get token it means wrong credentials
      if(!loginResponse.token){
        return {
          success: false,
          error: null,
          message: "Wrong Credentials",
        }
      }

      // Set cookies
      cookies().set({
        name: "currentUser",
        value: JSON.stringify({token: loginResponse.token, role: "admin"}),
        httpOnly: true,
        path: '/',
      })
      return {
        success: true,
        error: null,
        message: "Login success"
      }

    } catch (error: any) {
      if(error.name == "SyntaxError"){
        return {
          success: false,
          error: error.message,
          message: "Wrong Credentials",
        }
      }
      return {
        success: false,
        error: error.message,
        message: "API Error: Internal server error",
      }

    }

  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      message: "Internal Server Error!!",
    };
  }
}

export { deleteProductWithIdAct, createProductAct, updateProductAct, loginAct };
