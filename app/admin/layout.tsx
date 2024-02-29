import Sidebar from "../ui/Sidebar";
import "../globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto md:px-10 md:pt-5 bg-blue-gray-50 w-full">
          {children}
      </div>
    </div>
  );
};

export default layout;
