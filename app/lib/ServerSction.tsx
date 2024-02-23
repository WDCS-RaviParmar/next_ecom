"use server";

async function deleteProductWithId(id: number) {
  try {
    let deleteRes = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    deleteRes = await deleteRes.json();
    if (deleteRes) {
      return { message: "Product deleted successfully" };
    }
    return { message: "Trying to delete invalid product!!!" };
  } catch (error) {
    return { message: "API Error: Product is not delete" };
  }
}

export { deleteProductWithId };
