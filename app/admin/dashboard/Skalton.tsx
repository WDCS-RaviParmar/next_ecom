import {
  Card,
  CardBody,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
const Skalton = () => {
  return (
    <div className="max-w-full animate-pulse">
      <Card placeholder="" className="mt-6 w-fit bg-blue-gray-400">
        <CardBody placeholder="">
          <Typography
            placeholder=""
            className="mb-2 bg-blue-gray-300 rounded-full w-36">
            &nbsp;
          </Typography>
          <div className="flex items-center">
            <div className="mr-4 w-12 h-12 bg-blue-gray-300 rounded-full p-3">
              {/* <UsersIcon className="h-7 text-blue-300" /> */}
              <div className="h7 w-7">&nbsp;</div>
            </div>
            <Typography className="bg-blue-gray-300 w-24 rounded-full" placeholder="">&nbsp;</Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Skalton;
