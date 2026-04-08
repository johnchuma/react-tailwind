import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex bg-white w-full">
      <div className="w-3/14 h-screen bg-primary/10">sidebar</div>
      <div className="w-11/14 bg-[#FCF8FF]">
        <div className="w-full bg-white/10 shadow-md py-4 fixed ">Navbar</div>
        <div className="pt-24 px-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
