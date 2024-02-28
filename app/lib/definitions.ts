export interface ProductSchema {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: {
    size: number,
    type: string,
    name: string,
    lastModified: number
  };
  rating: { rate: number; count: number };
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
    title?: Array<string>;
    price?: Array<string>;
    description?: Array<string>;
    image?: Array<string>,
    category?: Array<string>;
  } | null | string | any;
  message?: string | null;
};

// interface productSchema {
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   categories: string;
// }
