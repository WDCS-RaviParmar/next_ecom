"use server";

import { z } from "zod";
import { CreateProductErrorSchema, CreateProductSchema } from "./definitions";
import { revalidatePath } from "next/cache";

// product zod schema
const zProductSchema = z.object({
  productName: z.string().min(1, "Product name is required").max(100, "Description must contain at most 100 character(s)").refine((name) => !(name.length < 3), 'Product name must contain at least 3 character(s)'),
  productPrice: z.number().positive("Please enter valid price"),
  productDescription: z.string().min(50, "Product Description must contain at least 50 character(s)").max(300, "Product Description must contain at most 300 character(s)"),
  productCategories: z.string().refine((cat)=> !(cat == "null"), "Please select categories"),
  productImage: z.object({
      size: z.number().refine((size) => (size <= 100000), 'File size must be 1mb or less'),
      type: z.string(),
      name: z.string().refine((iName) => iName != "undefined", "Product image is required"),
      lastModified: z.number(),
    })
    .required(),
});

// Create product server action
async function createProductAct( prevState: CreateProductErrorSchema, formData: FormData ) {
  try {

    // Getting product info from formData
    const formInfo = {
      productName: formData.get("productName"),
      productPrice: Number(formData.get("productPrice")),
      productDescription: formData.get("productDescription"),
      productCategories: String(formData.get("productCategories")),
      productImage: formData.get("productImage"),
    }

    // Checking zod validation
    const zRes = zProductSchema.safeParse(formInfo);
    
    // Return zod error
    if (!zRes.success) {
    // if (false) {
      return {
        success: false,
        error: zRes.error.flatten().fieldErrors,
        message: 'Note: Please resolve above message'
      }
    }

    // API For Create new product
    const response: any = await fetch("https://fakestoreapi.com/products",{
      method: "POST",
      body: JSON.stringify(formInfo)
    })
    const productResponse = await response.json() // Response of API

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
      error: error,
      message: "Server Error: There is some issue, Product is not created"
    };
  }
}

async function updateProductAct( image: string, prevState: CreateProductErrorSchema, formData: FormData ) {
  console.log(image,'ghasdfghsdghsdygy');
  
  try {
    // Getting product info from formData
    const formInfo = {
      productName: formData.get("productName"),
      productPrice: Number(formData.get("productPrice")),
      productDescription: formData.get("productDescription"),
      productCategories: String(formData.get("productCategories")),
      productImage: formData.get("productImage"),
    }

    // if(formInfo.productImage == "undefined"){
    //   formInfo.productImage.name = image
    // }

    // console.log(formInfo.productImage.type);
    

  } catch (error) {
    return{
      success: false,
      error: error,
      message: "Server Error: There is some issue, Product is not created"
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

export { deleteProductWithIdAct, createProductAct, updateProductAct };

// async function deleteProductWithIdAct(id: number): ActionResponse {
//   try {
//     let deleteRes = await fetch(`https://fakestoreapi.com/products/${id}`, {
//       method: "DELETE",
//     });
//     deleteRes = await deleteRes.json();
//     if (deleteRes) {
//       return {
//         statusCode: "200 OK",
//         message: { customeMsg: "Product deleted successfully" },
//       };
//     }
//     return {
//       statusCode: "500: Internal Server Error",
//       message: { customeMsg: "API Error: Product is not delete" },
//     };
//   } catch (error) {
//     return {
//       statusCode: "500: Internal Server Error",
//       message: { error: error, customeMsg: "API Error: Product is not delete" },
//     };
//   }
// }
