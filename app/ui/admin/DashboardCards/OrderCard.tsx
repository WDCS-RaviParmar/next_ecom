import {
  Card,
  CardBody,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const OrderCard = async () => {

    let order: any

    try {
        order = await fetch("https://fakestoreapi.com/products")
        order = await order.json()
    } catch (error: any) {
        console.log(`ERROR: ${error.message}`);
    }

    const orderLength = order.length

  return (
    <Card placeholder="" className="mt-6 w-fit">
      <CardBody placeholder="">
        <Typography
          placeholder=""
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          Order
        </Typography>
        <div className="flex items-center">
          <div className="mr-4 bg-blue-50 rounded-full p-3">
            <ShoppingCartIcon className="h-7 w-full text-blue-300" />
          </div>
          <Typography placeholder="">Total Order {orderLength? 101 : ": not found"}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderCard;
