import Image from "next/image";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
const page = async ({ params }: { params: { id: number } }) => {
  const productId = params.id;

  let productData = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  productData = await productData.json();

  return (
    <>
      <Card
        className="p-5 w-full"
        placeholder=""
        // color="transparent"
        shadow={false}
      >
        <Typography placeholder="" variant="h4" color="blue-gray">
          Edit Product
        </Typography>

        <form className="w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-4">
            <div className="">
              {/* <Typography placeholder="Name" color="blue-gray" className="mb-2">
                Product Name
              </Typography> */}
              <div className="my-5">
                <Image
                  src={productData.image}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Name"
                  defaultValue={productData.title}
                  size="md"
                />
              </div>
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Price"
                  size="md"
                  defaultValue={productData.price}
                  type="number"
                />
              </div>
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Description"
                  size="md"
                  defaultValue={productData.category}
                />
              </div>
              <div className="my-5">
                <Input
                  crossOrigin={undefined}
                  label="Product Category"
                  size="md"
                  defaultValue={productData.description}
                />
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

export default page;
