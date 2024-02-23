import Image from "next/image";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
const createProduct = async () => {
  let categories = await fetch("https://fakestoreapi.com/products/categories");
  categories = await categories.json();

  return (
    <>
      <Card
        className="p-5 w-full"
        placeholder=""
        // color="transparent"
        shadow={false}
      >
        <Typography placeholder="" variant="h4" color="blue-gray">
          Create Product
        </Typography>

        <form className="w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-4">
            <div className="">
              {/* <Typography placeholder="Name" color="blue-gray" className="mb-2">
                Product Name
              </Typography> */}
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Name"
                  defaultValue={""}
                  size="md"
                />
              </div>
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Price"
                  size="md"
                  defaultValue={""}
                  type="number"
                />
              </div>
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Description"
                  size="md"
                  defaultValue={""}
                />
              </div>
              <div className="my-5">
                <select className="bg-gray-300 py-2" name="categories" id="">
                  <option value="Choose Categorie" disabled>
                    Choose Categorie
                  </option>
                  {categories?.map((catg) => (
                    <option value="Choose Categorie">{catg}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Button placeholder="" className="mt-6" fullWidth>
            Update Product
          </Button>
        </form>
      </Card>
    </>
  );
};

export default createProduct;
