import ProductsTable from "@/app/ui/admin/ProductsTable";

const Products = async () => {
  let productsData = await fetch("https://fakestoreapi.com/products");
  productsData = await productsData.json();

  for (var i = 0; i < 50000; i++) {
    console.log(i);
  }

  return (
    <div>
      <ProductsTable productsData={productsData} />
    </div>
  );
};

export default Products;
