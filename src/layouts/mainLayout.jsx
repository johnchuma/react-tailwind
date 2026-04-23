import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [menu, setMenu] = useState(false)
  return (<>
    <div className="flex relative bg-white w-full">
      <Sidebar menu ={menu} />
      <div className="flex-1 bg-[#FCF8FF]">
        <Navbar menu={menu} setMenu ={setMenu} />
        <div className="pt-25 px-4 lg:px-12">
          <Outlet />
        </div>
      </div>
    </div>
    {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
        />
      )}</>
  );
};

export default MainLayout;
