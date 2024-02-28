"use server";

import { z } from "zod";
import { CreateProductErrorSchema } from "./definitions";
import { revalidatePath } from "next/cache";

// Zod product schema
const ZProductSchema = z.object({
  title: z.string().min(1, "Product name is required").max(100, "Description must contain at most 100 character(s)").refine((name) => !(name.length < 3), 'Product name must contain at least 3 character(s)'),
  price: z.number().positive("Please enter valid price"),
  description: z.string().min(50, "Product Description must contain at least 50 character(s)").max(300, "Product Description must contain at most 300 character(s)"),
  category: z.string().refine((cat)=> !(cat == "null"), "Please select categories"),
  image: z.object({
      size: z.number().refine((size) => (size <= 100000), 'File size must be 1mb or less'),
      type: z.string(),
      name: z.string().refine((iName) => iName != "undefined", "Product image is required"),
      lastModified: z.number(),
    })
    .required(),
});

// Zod product schema without product image validition 
const ZProductSchemaWitoutImage = ZProductSchema.omit({image: true})

// Create product server action
async function createProductAct( prevState: CreateProductErrorSchema, formData: FormData ) {
  try {

    // Getting product info from formData
    const formInfo = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      category: String(formData.get("category")),
      image: formData.get("image"),
    }

    // Checking zod validation
    const zRes = ZProductSchema.safeParse(formInfo);
    
    // Return zod error
    if (!zRes.success) {
      return {
        success: false,
        error: zRes.error.flatten().fieldErrors,
        message: 'Note: Please resolve above message'
      }
    }

    let productResponse;
    try {
      const response: any = await fetch("https://fakestoreapi.com/products",{
        method: "POST",
        body: JSON.stringify(formInfo)
      })
      productResponse = await response.json() // Response of API
    } catch (error) {
      return {
        success: false,
        error: error,
        message: "Server Error: There is some issue, Product is not created"
      };
    }

    // API For Create new product

    // Not Created Product
    if(!productResponse.id){
      return {
        success: false,
        error: null,
        message: "Product not created: Internal server error",
      }
    }

    // Revaliditing Path
    revalidatePath("/admin/products")

    // Product Create successfully
    return {
      success: true,
      error: "null",
      message: "Product Created Successfully",
    }

  } catch (error: any) {
    return {
      success: false,
      error: error.message,
      message: "Server Error: There is some issue, Product is not created"
    };
  }
}

async function updateProductAct( {image, productId}: {image: string, productId: number}, prevState: CreateProductErrorSchema, formData: FormData ) {
  try {
    // Getting product info from formData
    const formInfo: any = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
      category: String(formData.get("category")),
      image: formData.get("image"),
    }

    let zRes;

    // if user not updated product image then use previous image path which passing from props
    if(formInfo.image?.name == "undefined"){
      formInfo.image = image
      zRes = ZProductSchemaWitoutImage.safeParse(formInfo)
    }
    // if user updated the product image then validate product info with main product schema
    else{
      zRes = ZProductSchema.safeParse(formInfo)
    }
    
    // Return zod error
    if(!zRes.success){
      return {
        success: false,
        error: zRes.error.flatten().fieldErrors,
        message: "Note: Please resolve above errors"
      }
    }

    let productUpdateResponse;
    // API For Update a product
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(formInfo)
      })
      productUpdateResponse = await response.json()
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
        message: "Server Error: There is some issue, Product is not updated"
      }
    }

  // Not Created Product
  if(!productUpdateResponse.id){
    return{
      success: false,
      error: null,
      message: "Product updated sucessfully"
    }
  }

  // Revaliditing Path
  revalidatePath("/admin/products");

  // Product update successfully
  return {
    success: true,
    error: null,
    message: "Product updated successfully"
  }

  } catch (error: any) {
    return{
      success: false,
      error: error.message,
      message: "Server Error: There is some issue, Product is not updated"
    }
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

async function loginAct(prevState: any, formData: FormData){
  const userLoginFormInfo = {
    username: formData.get("mor_2314"),
    password: formData.get("password")
  }
  let loginResponse
  fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    })
})
    .then(res=>res.json())
    .then(json=>console.log(json))

}

export { deleteProductWithIdAct, createProductAct, updateProductAct, loginAct };