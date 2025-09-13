import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";

const DashboardLayout = () => {
  return (
    <section className="flex min-h-screen bg-[#212121] text-white">
      {/* Fixed Sidebar */}
      <div className="fixed z-10 h-screen w-70 bg-[#212121]">
        {/* Added 'fixed' and 'z-10' */}
        <LeftSide />
      </div>

      {/* Content Area - Takes remaining space and scrolls */}
      <div className="w-full overflow-y-auto bg-white bg-gradient-to-b pl-70">
        {/* Added 'pl-70' and 'overflow-y-auto' */}
        {/* <NavbarStyle /> */}
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
