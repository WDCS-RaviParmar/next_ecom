export interface ProductSchema {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productCategories: string;
  productImage: {
    size: number,
    type: string,
    name: string,
    lastModified: number
  };
  productRating: { rate: number; count: number };
}

export interface ApiProductSchema {
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string
}

export type CreateProductSchema = Omit<ProductSchema, "id" | "productRating">;

export type CreateProductErrorSchema = {
  success: boolean,
  error?: {
    productName?: Array<string>;
    productPrice?: Array<string>;
    productDescription?: Array<string>;
    productImage?: Array<string>,
    productCategories?: Array<string>;
  } | null | string;
  message?: string | null;
};

// interface productSchema {
//   productName: string;
//   productPrice: number;
//   productDescription: string;
//   productImage: string;
//   categories: string;
// }
