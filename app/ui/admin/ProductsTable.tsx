import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@/app/ui/material-tailwind-comp/comp-path";
import { EyeIcon } from "@heroicons/react/16/solid";
import UpdateProduct from "./UpdateProductBtn";
import DeleteProduct from "./DeleteProductBtn";
import { ProductSchema } from "@/app/lib/definitions";

const ProductsTable = ({
  productsData,
}: {
  productsData: Array<ProductSchema>;
}) => {
  const TABLE_HEAD = ["Image", "Title", "Category", "Price", "Options"];

  const TABLE_ROWS = [
    {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ];
  return (
    <Card placeholder="" className="p-5 w-full">
      <CardHeader
        placeholder=""
        floated={false}
        shadow={false}
        className="rounded-none"
      >
        {/* Title  */}
        <div className="flex m-0 p-0 justify-between">
          <Typography placeholder="" variant="h4" color="blue-gray">
            Products list
          </Typography>
          <Button placeholder="">
            <Link href="/admin/products/create">Create Product</Link>
          </Button>
        </div>
        <div className="mt-5 w-full">
          <Input
            crossOrigin={undefined}
            label="Search"
            className="w-full"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
        {/* </div> */}
      </CardHeader>
      <CardBody placeholder="" className="overflow-x-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    placeholder=""
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {productsData.map(
              ({ id, title, price, description, category, image }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-50";

                return (
                  <tr key={title}>
                    {/* Product Image */}
                    <td className={classes}>
                      <div className="flex flex-col">
                        <img
                          className="w-12 h-12 rounded-md"
                          src={image}
                          alt={title}
                        />
                      </div>
                    </td>
                    {/* Product Title */}
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          placeholder=""
                          variant="small"
                          color="blue-gray"
                          className="font-normal break-words w-52"
                        >
                          {title}
                        </Typography>
                      </div>
                    </td>
                    {/* Product Category */}
                    <td className={classes}>
                      <Typography
                        placeholder=""
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {category}
                      </Typography>
                    </td>
                    {/* Product Price */}
                    <td className={classes}>
                      <Typography
                        placeholder=""
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className={classes + "flex"}>
                      <Tooltip content="View Full Details">
                        <IconButton placeholder="" variant="text">
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <UpdateProduct id={id} />
                      <DeleteProduct id={id} />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter
        placeholder=""
        className="flex items-center justify-between border-t border-blue-gray-50 p-4"
      >
        <Typography
          placeholder=""
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button placeholder="" variant="outlined" size="sm">
            Previous
          </Button>
          <Button placeholder="" variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductsTable;
