import { ApiProductSchema } from "@/app/lib/definitions";

interface ProductProps{
  productData?: ApiProductSchema
}

const ProductCategories = async ({productData}: ProductProps) => {
  
  let categories = await fetch("https://fakestoreapi.com/products/categories");
  let categoryList = await categories.json();

  return (
    <select
      name="category"
      defaultValue={productData?.category}
      className="bg-transparent border border-gray-400 text-gray-600 text-md rounded-md focus-visible:border-1 py-2 w-full "
    >
      <option value="" disabled selected>
        Choose Category
      </option>
      {categoryList?.map((catg: string) => (
        <option key={catg} value={catg}>
          {catg}
        </option>
      ))}
    </select>
  );
};

export default ProductCategories;
