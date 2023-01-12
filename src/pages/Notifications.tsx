import { AuthContext } from "authContext";
import bgImage from "images/panda.jpg";
import { useContext } from "react";
import ErrorPage from "./ErrorPage";

function Notifications() {
  const { user } = useContext(AuthContext);
  if (!user || user?.username === "admin") return <ErrorPage />;

  return (
    <div
      className="px-20 w-full  flex flex-col items-center  
 relative grow"
    >
      <img
        src={bgImage}
        alt=""
        className="opacity-5  -z-10 top-0 left-0 right-0 absolute h-full object-cover w-full "
      />

      <div className="my-10 text-2xl font-semibold">Moja obaveštenja</div>
      <div className="w-full max-w-5xl">
        <div className="flex gap-7 justify-center flex-wrap max-w-5xl">
          {user &&
            user?.notifications
              .slice(0)
              .reverse()
              .map((not) => {
                return (
                  <div
                    key={not}
                    className="textarea  rounded-sm text-left bg-white w-full"
                  >
                    {not}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
