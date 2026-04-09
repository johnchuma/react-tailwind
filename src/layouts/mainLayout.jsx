import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const MainLayout = () => {
  return (
    <div className="flex bg-white w-full">
      <Sidebar />
      <div className="w-11/14 bg-[#FCF8FF]">
        <Navbar />
        <div className="pt-24 px-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
