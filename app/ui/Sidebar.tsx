import {Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip} from "@/app/ui/material-tailwind-comp/comp-path"
import { Cog6ToothIcon, InboxIcon, PowerIcon, PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/16/solid"

const Sidebar = () => {
  return (
   <div className="flex">
     <Card placeholder='' className=" h-screen p-4 shadow-gray-900 shadow-lg ">
    <div className="mb-2 p-4">  
      <Typography placeholder='' variant="h5" color="blue-gray">
        Next.ECom
      </Typography>
    </div>
    <List placeholder=''>
      <ListItem placeholder=''>
        <ListItemPrefix placeholder=''>
          <PresentationChartBarIcon className="h-5 w-5" />
        </ListItemPrefix>
        Dashboard
      </ListItem>
      <ListItem placeholder=''>
        <ListItemPrefix placeholder=''>
          <ShoppingBagIcon className="h-5 w-5" />
        </ListItemPrefix>
        Products
      </ListItem>
      <ListItem placeholder=''>
        <ListItemPrefix placeholder=''>
          <ShoppingCartIcon className="h-5 w-5" />
        </ListItemPrefix>
        Order
        <ListItemSuffix placeholder=''>
          <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
        </ListItemSuffix>
      </ListItem>
      <ListItem placeholder='' >
        <ListItemPrefix placeholder=''>
          <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        Profile
      </ListItem>
      <ListItem placeholder=''>
        <ListItemPrefix placeholder=''>
          <PowerIcon className="h-5 w-5" />
        </ListItemPrefix>
        Log Out
      </ListItem>
    </List>
  </Card>
   </div>
  )
}

export default Sidebar