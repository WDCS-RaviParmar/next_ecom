"use client";

import { createProductAct, updateProductAct } from "@/app/lib/ServerSction";
import { CreateProductErrorSchema, ApiProductSchema } from "@/app/lib/definitions";
import { useFormState } from "react-dom";
import { Card, Input, Button, Typography } from "@/app/ui/material-tailwind-comp/comp-path";
import CreateProductBtn from "./CreateProductBtn";
import Image from 'next/image'


const UpdateProductForm = async ({children,productData}: {children: React.ReactNode;productData: ApiProductSchema;}) => {

    // Previous State for product response
    const prevState: CreateProductErrorSchema = {
        success: false,
        error: null,
        message: null,
    };
    const productDataApi = updateProductAct.bind(null, productData.image)
    const [formState, formStateAction] = useFormState(productDataApi, prevState);

  return (
    <>
      <Card className="p-5 w-full" placeholder="" shadow={false}>
        <Typography placeholder="" variant="h4" color="blue-gray">
          Create Product
        </Typography>
        <form action={formStateAction} className="w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-4">
            <div className="">
            <div className="my-5">
            <Image
                src={productData.image}
                width={75}
                height={75}
                alt="Picture of the author"/>
            </div>
            {/* Product Name */}
              <div className="my-5">
                <Input
                  name="productName"
                  crossOrigin={undefined}
                  label="Product Name"
                  defaultValue={productData?.title}
                  size="md"
                />
                {!formState?.success &&
                  formState?.error?.productName?.map((msg: string) => (
                    <Typography
                      placeholder=""
                      variant="small"
                      color="red"
                      className="flex items-center font-normal"
                    >
                      {msg}
                    </Typography>
                  ))}
              </div>
              {/* Product Price */}
              <div className="my-5">
                <Input
                  name="productPrice"
                  crossOrigin={undefined}
                  label="Product Price"
                  size="md"
                  defaultValue={productData?.price}
                  type="number"
                />
                {!formState?.success &&
                  formState?.error?.productPrice?.map((msg: string) => (
                    <Typography
                      placeholder=""
                      variant="small"
                      color="red"
                      className="flex items-center font-normal"
                    >
                      {msg}
                    </Typography>
                  ))}
              </div>
              {/* Product Description */}
              <div className="my-5">
                <Input
                  name="productDescription"
                  crossOrigin={undefined}
                  label="Product Description"
                  size="md"
                  defaultValue={productData?.description}
                />
                {!formState?.success &&
                  formState?.error?.productDescription?.map((msg: string) => (
                    <Typography
                      placeholder=""
                      variant="small"
                      color="red"
                      className="flex items-center font-normal"
                    >
                      {msg}
                    </Typography>
                  ))}
              </div>
                {/* Product Categoies List */}
              <div className="my-5">
                {children}
                {!formState?.success &&
                  formState?.error?.productCategories?.map((msg: string) => (
                    <Typography
                      placeholder=""
                      variant="small"
                      color="red"
                      className="flex items-center font-normal"
                    >
                      {msg}
                    </Typography>
                  ))}
              </div>
              {/* Product Image */}
              <div className="my-5">
                <Input
                  name="productImage"
                  crossOrigin={undefined}
                  label="Choose Product Image"
                  size="md"
                  type="file"
                  defaultValue={""}
                />
                {!formState?.success &&
                  formState?.error?.productImage?.map((msg: string) => (
                    <Typography
                      placeholder=""
                      variant="small"
                      color="red"
                      className="flex items-center font-normal"
                    >
                      {msg}
                    </Typography>
                  ))}
              </div>
            {/* Message */}
              <Typography
                placeholder=""
                variant="small"
                color={formState?.success ? "green" : "red"}
                className="flex items-center font-normal"
              >
                {formState?.message}
              </Typography>
            </div>
          </div>
          <CreateProductBtn btnName="Update Product" lodingBtnName="Updating Product"  />
        </form>
      </Card>
    </>
  );
};

export default UpdateProductForm;
