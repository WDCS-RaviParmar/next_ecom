import { Button } from "@/app/ui/material-tailwind-comp/comp-path";
import { useFormStatus } from "react-dom";

const CreateProductBtn = ({btnName, lodingBtnName}: {btnName: string , lodingBtnName: string}) => {
    const {pending} = useFormStatus()
  return (
    <Button type="submit" loading={pending} placeholder="" className="mt-6" fullWidth>
      {pending? btnName : lodingBtnName}
    </Button>
  );
};

export default CreateProductBtn;
