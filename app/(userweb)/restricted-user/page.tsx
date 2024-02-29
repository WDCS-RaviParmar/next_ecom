import Link from "next/link"
import {Button} from "@/app/ui/material-tailwind-comp/comp-path"

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col border">
      <h1 className="text-2xl font-medium">You do't have permission to visit this page</h1>
      <p className="text-lg">Login with admin credntials</p>
      <Link href="/login">
        <Button placeholder="">Login</Button>
      </Link>
    </div>
  )
}

export default page
