import ProductsTable from "@/app/ui/admin/ProductsTable";

const Products = async () => {
  let productsData = await fetch("https://fakestoreapi.com/products");
  productsData = await productsData.json();

  // console.log(productsData);

  // for (var i = 0; i < 10000; i++) {
  //   console.log(i);
  // }

  return (
    <div>
      <ProductsTable productsData={productsData} />
    </div>
  );
};

export default Products;
