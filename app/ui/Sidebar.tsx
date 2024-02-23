import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Typography,
} from "@/app/ui/material-tailwind-comp/comp-path";
import {
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex">
      <Card
        placeholder=""
        className="rounded-s-lg h-screen p-4 shadow-gray-500 shadow-md"
      >
        <div className="mb-2 p-4">
          <Link href="/">
            <Typography placeholder="" variant="h5" color="blue-gray">
              Next.ECom
            </Typography>
          </Link>
        </div>
        <List placeholder="">
          <ListItem placeholder="">
            <Link href="/admin/dashboard" className="flex w-full">
              <ListItemPrefix placeholder="">
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </Link>
          </ListItem>
          <ListItem placeholder="">
            <Link href="/admin/products" className="flex w-full">
              <ListItemPrefix placeholder="">
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Products
            </Link>
          </ListItem>
          <ListItem placeholder="">
            <Link href="/admin/profile" className="flex w-full">
              <ListItemPrefix placeholder="">
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </Link>
          </ListItem>
          <ListItem placeholder="">
            <Link href="/admin/logout" className="flex w-full">
              <ListItemPrefix placeholder="">
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default Sidebar;
