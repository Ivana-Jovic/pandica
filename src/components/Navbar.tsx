import { AuthContext } from "authContext";
import logo from "images/logo.png";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import Register from "./Register";

function Navbar() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [issignin, setssignin] = useState<boolean>(true);

  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const { user, signin, signout } = useContext(AuthContext);

  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="w-full bg-darkGreen px-10 py-3 grid grid-cols-2 items-center">
      {/* <a href="/"> */}
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer"
        src={logo}
        alt=""
        height="60"
        width="60"
      />
      {/* </a> */}
      {user?.username === "admin" && (
        <div className="flex justify-end space-x-10 font-bold">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/workerhome")}
          >
            POCETNA
          </div>
          <div
            className="cursor-pointer"
            onClick={() => navigate("/WorkerNotifications")}
          >
            OBAVESTENJA
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              signout();
              navigate("/");
            }}
          >
            ODJAVA
          </div>
        </div>
      )}
      {user?.username !== "admin" && (
        <div className="flex justify-end space-x-10 font-bold">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            POCETNA
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/tickets")}>
            ULAZNICE
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/contact")}>
            KONTAKT
          </div>
          {!user && (
            <div className="cursor-pointer" onClick={() => setPopupOpen(true)}>
              {" "}
              {/* <label htmlFor="my-modal-3" className="bg-gray-500"> */}
              PRIJAVA
              {/* </label> */}
            </div>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="text-left dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
              >
                <li>
                  <Link to={"/contact"}>Obaveštenja</Link>
                  {/* <NavLink to={"/contact"}>Obaveštenja</NavLink> */}
                </li>
                <li onClick={() => navigate("/profile")}>Profil</li>
                {/* <li>
                  <a href="/contact">Item 1</a>
                </li> */}
                <li onClick={() => signout()}>Odjava</li>
              </ul>
            </div>
          )}
        </div>
      )}
      <Popup open={popupOpen} onClose={handleClose}>
        {!issignin && (
          <div>
            <Register inPopup={true} action={() => handleClose()} />
            <div onClick={() => setssignin(!issignin)}>
              Imate nalog? Prijavite se...
            </div>
          </div>
        )}
        {issignin && (
          <div className="grid grid-cols-2 items-center gap-5 mt-10 mr-10">
            <label className="">Korisnicko ime</label>{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="textarea w-full rounded-sm "
            />
            <label className="">Lozinka</label>{" "}
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="textarea w-full rounded-sm "
            />
            <button
              onClick={() => {
                if (signin(username, password)) {
                  setPopupOpen(false);
                  if (username === "admin" && password === "123")
                    navigate("/WorkerHome");
                  else navigate("/");
                }
              }}
              className="col-span-2 justify-self-center
                my-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md"
            >
              Prijavi se
            </button>{" "}
            <div
              onClick={() => setssignin(!issignin)}
              className="col-span-2 justify-self-center"
            >
              Nemate nalog? Registrujte se...
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default Navbar;
