"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { IconButton, Tooltip } from "@/app/ui/material-tailwind-comp/comp-path";
import { deleteProductWithIdAct } from "@/app/lib/ServerSction";
import { useFormState } from "react-dom";
import { successTost } from "../react-hot-toast/react-hot-toast";
import { Toaster } from "react-hot-toast";

const DeleteProduct = ({ id }: { id: number }) => {
  let deleteProduct = deleteProductWithIdAct.bind(null, id);
  const [state, formAction] = useFormState(deleteProduct, null);
  if(state?.success){
    successTost(state.message)
  }
  return (
    <form action={formAction}>
      <Toaster />
      <Tooltip content="Delete Product">
        <IconButton type="submit" placeholder="" variant="text">
          <TrashIcon className="h-4 w-4 text-red-700" />
        </IconButton>
      </Tooltip>
      {/* {state?.message} */}
    </form>
  );
};

export default DeleteProduct;
