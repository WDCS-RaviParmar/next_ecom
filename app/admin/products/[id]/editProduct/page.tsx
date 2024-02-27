import { ApiProductSchema, CreateProductErrorSchema } from "@/app/lib/definitions";
import ProductCategories from "@/app/ui/admin/ProductCategories";
import UpdateProductForm from "@/app/ui/admin/UpdateProductForm";

const editProduct = async ({ params }: { params: { id: number } }) => {
  
  // Fetching product data
  let response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  let productData: ApiProductSchema = await response.json();

  return (
    <UpdateProductForm productData={productData}>
      <ProductCategories productData={productData}/>
    </UpdateProductForm>
  );
};

export default editProduct;
