import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Contact from "./Contact";
import Home from "./Home";

function Pages() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Navbar />

      <div className="grow flex flex-col bg-lightGreen">
        <Contact />
        {/* <Home /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Pages;
