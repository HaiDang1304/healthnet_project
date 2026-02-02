import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";

const DashBoardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 bg-background-light dark:bg-[#0f172a]">
        
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
