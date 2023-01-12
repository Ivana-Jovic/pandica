import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Navbar />
      <Toaster />
      <div className="grow flex flex-col ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
