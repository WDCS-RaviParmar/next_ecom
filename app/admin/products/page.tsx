import ProductsTable from "@/app/ui/admin/ProductsTable";

const Products = async () => {
  let productsData = await fetch("https://fakestoreapi.com/products");
  productsData = await productsData.json();

  return (
    <div>
      <ProductsTable productsData={productsData} />
    </div>
  );
};

export default Products;
