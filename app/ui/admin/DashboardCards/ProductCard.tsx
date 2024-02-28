import {
  Card,
  CardBody,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

const ProductCard = async () => {

    let product: any

    try {
        product = await fetch("https://fakestoreapi.com/products")
        product = await product.json()
    } catch (error: any) {
        console.log(`ERROR: ${error.message}`);
    }

    const productLength = product.length

  return (
    <Card placeholder="" className="mt-6 w-fit">
      <CardBody placeholder="">
        <Typography
          placeholder=""
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          Product
        </Typography>
        <div className="flex items-center">
          <div className="mr-4 bg-blue-50 rounded-full p-3">
            <ShoppingBagIcon className="h-7 text-blue-300" />
          </div>
          <Typography placeholder="">Total Product  {productLength? productLength : ": not found"}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
