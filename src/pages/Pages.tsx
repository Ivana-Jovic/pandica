import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Tickets from "./Tickets";
import { Toaster } from "react-hot-toast";

function Pages() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Navbar />
      <Toaster />
      <div className="grow flex flex-col bg-lightGreen">
        {/* <Contact /> */}
        {/* <Home /> */}
        <Tickets />
      </div>
      <Footer />
    </div>
  );
}

export default Pages;
