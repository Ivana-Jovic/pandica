import bgImage from "images/panda.jpg";
import Register from "components/Register";
import { useContext } from "react";
import { AuthContext } from "authContext";
import ErrorPage from "./ErrorPage";

function Profile() {
  const { user } = useContext(AuthContext);
  if (!user || user?.username === "admin") return <ErrorPage />;

  return (
    <div className="flex flex-col items-center relative grow">
      <img
        src={bgImage}
        alt=""
        className="opacity-5  -z-10 top-0 left-0 right-0 absolute h-full object-cover w-full "
      />
      <div className="my-10 text-2xl font-semibold">Profile</div>
      <Register inPopup={false} />
    </div>
  );
}

export default Profile;
