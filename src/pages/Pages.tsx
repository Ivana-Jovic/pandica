import React from "react";
import Layout from "./Layout";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Tickets from "./Tickets";
import { Toaster } from "react-hot-toast";
import Animal from "./Animal";
import Notifications from "./Notifications";
import Profile from "./Profile";
import WorkerHome from "./WorkerHome";
import WorkerNotifications from "./WorkerNotifications";

function Pages() {
  return (
    // <div></div>
    // ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/animal/:name" element={<Animal />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/workernotifications"
            element={<WorkerNotifications />}
          />
          <Route path="/workerhome" element={<WorkerHome />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>

    // , document.getElementById("root")
    //  );
  );
}

export default Pages;
