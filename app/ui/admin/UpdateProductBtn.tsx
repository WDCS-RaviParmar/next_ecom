import { PencilIcon } from "@heroicons/react/24/solid";
import { IconButton, Tooltip } from "@/app/ui/material-tailwind-comp/comp-path";
import Link from "next/link";

const UpdateProduct = ({ id }: { id: number }) => {
  return (
    <Tooltip content="Edit Product">
      <Link href={`/admin/products/${id}/editProduct/`}>
        <IconButton placeholder="" variant="text">
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default UpdateProduct;
