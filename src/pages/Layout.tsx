import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Tickets from "./Tickets";
import { Toaster } from "react-hot-toast";
import Animal from "./Animal";
import Notifications from "./Notifications";
import Profile from "./Profile";
import WorkerHome from "./WorkerHome";
import WorkerNotifications from "./WorkerNotifications";
import { Outlet, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Navbar />
      <Toaster />
      <div className="grow flex flex-col ">
        {/* bg-lightGreen  */}
        {/* <Contact /> */}
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes> */}
        {/* <Home /> */}
        <Outlet />
        {/* <Tickets /> */}
        {/* <Animal /> */}
        {/* <Notifications /> */}
        {/* <Profile /> */}
        {/* <WorkerHome /> */}
        {/* <WorkerNotifications /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
