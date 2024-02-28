import OrderCard from "@/app/ui/admin/DashboardCards/OrderCard";
import ProductCard from "@/app/ui/admin/DashboardCards/ProductCard";
import UserCard from "@/app/ui/admin/DashboardCards/UserCard";
import { Suspense } from "react";

const Abc = () => {
  return (
    <div>
        <Suspense fallback="User commminnnggg">
          <UserCard />
        </Suspense>
        <Suspense fallback="hsfhjsfjhsfd">
          <ProductCard />
        </Suspense>
        <Suspense fallback="hsfhjsfjhsfd">
          <OrderCard />
        </Suspense>
    </div>
  )
}

export default Abc
