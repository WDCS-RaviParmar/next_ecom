import OrderCard from "@/app/ui/admin/DashboardCards/OrderCard";
import ProductCard from "@/app/ui/admin/DashboardCards/ProductCard";
import UserCard from "@/app/ui/admin/DashboardCards/UserCard";
import { Suspense } from "react";
import Skalton from "./Skalton";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-4">
        <Suspense fallback={<Skalton/>}>
          <UserCard />
        </Suspense>
        <Suspense fallback={<Skalton/>}>
          <ProductCard />
        </Suspense>
        <Suspense fallback={<Skalton/>}>
          <OrderCard />
        </Suspense>
      </div>
    </>
  );
};

export default Dashboard;
