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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="-mt-px h-4 w-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"/>
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="-mt-px h-4 w-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"/>
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="-mt-px h-4 w-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"/>
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="-mt-px h-4 w-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"/>
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" className="-mt-px h-4 w-4">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"/>
                      </svg>
                      {msg}
                    </Typography>
                  ))}
              </div>
              
              <Typography
                placeholder=""
                variant="small"
                color={formState.success? "green" : "red"}
                className="flex items-center font-normal">
                {formState?.message}
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