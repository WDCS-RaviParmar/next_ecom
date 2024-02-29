"use client";

import {
  Card,
  Input,
  Button,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
import { useFormState, useFormStatus } from "react-dom";
import { loginAct } from "../lib/ServerSction";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LoginForm() {
  const initailState: any = {
    success: null,
    error: null,
    message: null,
  };

  const [formState, formStateAction] = useFormState(loginAct, initailState);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-gray-50">
      <Card
        className="p-6 shadow-gray-400 shadow-md"
        placeholder=""
        shadow={false}
      >
        <Typography placeholder="" variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography placeholder="" color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          action={formStateAction}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder=""
              variant="h6"
              color="blue-gray"
              className="-mb-6"
            >
              User Name
            </Typography>
            <Input
              name="username"
              crossOrigin={false}
              type="string"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {!formState?.success &&
              formState?.error?.username?.map((msg: string) => (
                <Typography
                  placeholder=""
                  variant="small"
                  color="red"
                  className="flex items-center font-normal -mt-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {msg}
                </Typography>
              ))}
            <Typography
              placeholder=""
              variant="h6"
              color="blue-gray"
              className="-mb-6"
            >
              Password
            </Typography>
            <Input
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
            {!formState?.success &&
              formState?.error?.password?.map((msg: string) => (
                <Typography
                  placeholder=""
                  variant="small"
                  color="red"
                  className="flex items-center font-normal -mt-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {msg}
                </Typography>
              ))}
          </div>
          {formState.message && (
            <>
              <hr className=" my-1" />
              <Typography placeholder="" variant="small" color={formState?.success? "green" : "red"} className="flex items-center font-normal" >
                {formState?.message}
              </Typography>
            </>
          )}
          <LoginBtn formStatus={formState?.success} />
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

function LoginBtn({formStatus}: {formStatus: boolean}) {
  const router = useRouter()
  const { pending } = useFormStatus();
  if(formStatus) {
    router.push("/")
  }

  return (
    <Button
      placeholder=""
      type="submit"
      loading={pending}
      aria-disabled={pending}
      className="mt-6"
      fullWidth
    >
      {pending ? "...Login" : "Login"}
    </Button>
  );
}

export default LoginForm;
