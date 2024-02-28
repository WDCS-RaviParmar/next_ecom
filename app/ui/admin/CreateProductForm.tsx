"use client";
import { Toaster } from 'react-hot-toast';
import { Card, Input, Button, Typography } from "@/app/ui/material-tailwind-comp/comp-path";
import { createProductAct } from "@/app/lib/ServerSction";
import { useFormState, useFormStatus } from "react-dom";
import { CreateProductErrorSchema } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { successTost } from '../react-hot-toast/react-hot-toast';

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

  // if(formState.message){
  //   errorTost(''+formState.message)
  // }

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
                  name="title"
                  crossOrigin={undefined}
                  label="Product Name"
                  defaultValue={""}
                  size="md"
                />
                {!formState?.success &&
                  formState?.error?.title?.map((msg: string) => (
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
                  name="price"
                  crossOrigin={undefined}
                  label="Product Price"
                  size="md"
                  defaultValue={""}
                  type="number"
                />
                {!formState.success &&
                  formState?.error?.price?.map((msg: string) => (
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
                  name="description"
                  crossOrigin={undefined}
                  label="Product Description"
                  size="md"
                  defaultValue={""}
                />
                {!formState.success &&
                  formState?.error?.description?.map((msg: string) => (
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
                {/* Product Categoies List*/}
                {children}
                {!formState.success &&
                  formState?.error?.category?.map((msg: string) => (
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
                  name="image"
                  crossOrigin={undefined}
                  label="Choose Product Image"
                  size="md"
                  type="file"
                  defaultValue={""}
                />
                {!formState.success &&
                  formState?.error?.image?.map((msg: string) => (
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
          <CreateProductBtn/>
        </form>
      </Card>
    </>
  );
};

const CreateProductBtn = () => {
  const {pending} = useFormStatus()
  return (
    <Button type="submit" loading={pending} placeholder="" className="mt-6" fullWidth>
      {pending? "Create Product" : "Creating Product"}
    </Button>
  );
};

export default CreateProductForm