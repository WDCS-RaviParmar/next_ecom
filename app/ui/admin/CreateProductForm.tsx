"use client";
import { Toaster } from 'react-hot-toast';
import { Card, Input, Button, Typography } from "@/app/ui/material-tailwind-comp/comp-path";
import { createProductAct } from "@/app/lib/ServerSction";
import { useFormState } from "react-dom";
import { CreateProductErrorSchema } from "@/app/lib/definitions";
import CreateProductBtn from "./CreateProductBtn";
import { useRouter } from "next/navigation";
import { errorTost, successTost } from '../react-hot-toast/react-hot-toast';

const CreateProductForm = ({children}: {children: any}) => {
  const router = useRouter()

  // Previous product schema
  const prevState: CreateProductErrorSchema = {
    success: false,
    error: null,
    message: null,
  };

  const [formState, formStateAction] = useFormState(createProductAct, prevState);

  if(formState.success){
    successTost("Successfully Product Created!")
    setTimeout(() => {
      router.push('/admin/products')
    }, 1500);
  }

  if(formState.message){
    errorTost(''+formState.message)
  }

  return (
    <>
    <Toaster />
      <Card className="p-5 w-full" placeholder="" shadow={false}>
        <Typography placeholder="" variant="h4" color="blue-gray">
          Create Product
        </Typography>
        <form action={formStateAction} className="w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-4">
            <div className="">
              <div className="my-5">
                <Input
                  name="productName"
                  crossOrigin={undefined}
                  label="Product Name"
                  defaultValue={""}
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
              <div className="my-5">
                <Input
                  name="productPrice"
                  crossOrigin={undefined}
                  label="Product Price"
                  size="md"
                  defaultValue={""}
                  type="number"
                />
                {!formState.success &&
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
              <div className="my-5">
                <Input
                  name="productDescription"
                  crossOrigin={undefined}
                  label="Product Description"
                  size="md"
                  defaultValue={""}
                />
                {!formState.success &&
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
              <div className="my-5">
                {/* Product Categoies List     */}
                {children}
                {!formState.success &&
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
              <div className="my-5">
                <Input
                  name="productImage"
                  crossOrigin={undefined}
                  label="Choose Product Image"
                  size="md"
                  type="file"
                  defaultValue={""}
                />
                {!formState.success &&
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
              
              <Typography
                placeholder=""
                variant="small"
                color={formState.success? "green" : "red"}
                className="flex items-center font-normal">
                {formState.message}
              </Typography>
            </div>
          </div>
          <CreateProductBtn btnName="Update Product" lodingBtnName="Updating Product"/>
        </form>
      </Card>
    </>
  );
};

export default CreateProductForm