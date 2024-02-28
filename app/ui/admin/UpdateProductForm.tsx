"use client";

import { updateProductAct } from "@/app/lib/ServerSction";
import { CreateProductErrorSchema, ApiProductSchema } from "@/app/lib/definitions";
import { useFormState, useFormStatus } from "react-dom";
import { Card, Input, Button, Typography } from "@/app/ui/material-tailwind-comp/comp-path";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { successTost } from "../react-hot-toast/react-hot-toast";
import { Toaster } from "react-hot-toast";

// Previous State for product response
const prevState: CreateProductErrorSchema = {
    success: false,
    error: null,
    message: null,
};

const UpdateProductForm = ({children,productData,productId}: {children: React.ReactNode;productData: ApiProductSchema;productId: number}) => {

  const router = useRouter()

  const productDataApi = updateProductAct.bind(null, {image: productData.image, productId})
  
  const [formState, formStateAction] = useFormState(productDataApi, prevState);

  if(formState.success){
    successTost('Successfully product updated!')
    setTimeout(() => {
      router.push('/admin/products')
    }, 1500);
  }
  
  return (
    <>
    <Toaster/>
      <Card className="p-5 w-full" placeholder="" shadow={false}>
        <Typography placeholder="" variant="h4" color="blue-gray">
          Update Product
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
                  name="title"
                  crossOrigin={undefined}
                  label="Product Name"
                  defaultValue={productData?.title}
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
              {/* Product Price */}
              <div className="my-5">
                <Input
                  name="price"
                  crossOrigin={undefined}
                  label="Product Price"
                  size="md"
                  defaultValue={productData?.price}
                  type="number"
                />
                {!formState?.success &&
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
              {/* Product Description */}
              <div className="my-5">
                <Input
                  name="description"
                  crossOrigin={undefined}
                  label="Product Description"
                  size="md"
                  defaultValue={productData?.description}
                />
                {!formState?.success &&
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
                {/* Product Categoies List */}
              <div className="my-5">
                {children}
                {!formState?.success &&
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
              {/* Product Image */}
              <div className="my-5">
                <Input
                  name="image"
                  crossOrigin={undefined}
                  label="Choose Product Image"
                  size="md"
                  type="file"
                  defaultValue={""}
                />
                {!formState?.success &&
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
            {/* Message */}
              <Typography
                placeholder="nothing"
                variant="small"
                color={formState.success? "green" : "red"}
                className={`flex items-center font-normal`}
              >
                {formState?.message}
              </Typography>
            </div>
          </div>
          <UpdateProductBtn/>
        </form>
      </Card>
    </>
  );
};


const UpdateProductBtn = () => {
  const {pending} = useFormStatus()
return (
  <Button type="submit" loading={pending} placeholder="" className="mt-6" fullWidth>
    {pending? "Update Product" : "Updating Product"}
  </Button>
);
};


export default UpdateProductForm