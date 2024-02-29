import {
  Card,
  CardBody,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
import { UsersIcon } from "@heroicons/react/16/solid";

const UserCard = async () => {

    let user: any
   
  try {
    user = await fetch("https://fakestoreapi.com/users")
    user = await user.json()
  } catch (error: any) {
    console.log(`ERROR: ${error.message}`);
  }

   const userLength = user?.length

  return (
    <Card placeholder="" className="mt-6 w-fit">
      <CardBody placeholder="">
        <Typography
          placeholder=""
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          User
        </Typography>
        <div className="flex items-center">
          <div className="mr-4 bg-blue-50 rounded-full p-3">
            <UsersIcon className="h-7 text-blue-300" />
          </div>
          <Typography placeholder="">Total User {userLength? userLength : ": not found"}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
