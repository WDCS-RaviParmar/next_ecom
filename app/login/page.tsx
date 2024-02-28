'use client'

import {Card,Input,Button,Typography} from "@/app/ui/material-tailwind-comp/comp-path";
import { useFormState, useFormStatus } from "react-dom";
import { loginAct } from "../lib/ServerSction";
import Link from "next/link";

function LoginForm() {

    const [formState, formStateAction] = useFormState(loginAct, undefined)

  return (
    <div className="flex justify-center items-center h-screen bg-blue-gray-50">
    <Card className="p-6 shadow-gray-400 shadow-md" placeholder="" shadow={false}>
      <Typography placeholder="" variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography placeholder="" color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form action={formStateAction} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
        <Typography
            placeholder=""
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            User Name
          </Typography>
          <Input
            required={true}
            name="username"
            crossOrigin={false}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder=""
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Password
          </Typography>
          <Input
            required={true}
            name="password"
            crossOrigin={false}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <LoginBtn/>
        <Typography
          placeholder=""
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Don't have an account?{" "}
          <Link href="#" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
  );
}

function LoginBtn(){
    const {pending} = useFormStatus()
    return(
    <Button placeholder="" type="submit" loading={pending} aria-disabled={pending} className="mt-6" fullWidth>
        {pending? "...Login" : "Login"}
    </Button>
    )
}

export default LoginForm