"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { IconButton, Tooltip } from "@/app/ui/material-tailwind-comp/comp-path";
import { deleteProductWithId } from "@/app/lib/ServerSction";
import { useFormState } from "react-dom";

const DeleteProduct = ({ id }: { id: number }) => {
  let deleteProduct = deleteProductWithId.bind(null, id);
  const [state, formAction] = useFormState(deleteProduct, null);
  return (
    <form action={formAction}>
      <Tooltip content="Delete Product">
        <IconButton type="submit" placeholder="" variant="text">
          <TrashIcon className="h-4 w-4 text-red-700" />
        </IconButton>
      </Tooltip>
      {state?.message}
    </form>
  );
};

export default DeleteProduct;
