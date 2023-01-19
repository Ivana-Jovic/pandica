import { AuthContext } from "authContext";
import { userInfo } from "data";
import bgImage from "images/panda.jpg";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import ErrorPage from "./ErrorPage";

function WorkerNotifications() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const notificationsAdmin: string[] = JSON.parse(
    localStorage.getItem("notificationAdmin") ?? ""
  );
  const { user } = useContext(AuthContext);
  if (user?.username !== "admin") return <ErrorPage />;

  const allow = (not: string) => {
    toast.success("Odobreno");
    const nameTo: string = not.split(":")[0];
    const users: userInfo[] = JSON.parse(localStorage.getItem("users") ?? "");
    const userTo = users.find((user) => {
      return user.username === nameTo;
    });
    userTo?.notifications.push(
      "Radnik odobrio " + new Date().toLocaleDateString()
    );

    const index1 = userTo ? users.indexOf(userTo) : -1;

    if (userTo) users[index1] = userTo;
    localStorage.setItem("users", JSON.stringify(users));

    const index2 = notificationsAdmin.indexOf(not);
    notificationsAdmin.splice(index2, 1);
    localStorage.setItem(
      "notificationAdmin",
      JSON.stringify(notificationsAdmin)
    );
    setRefresh(!refresh);
  };
  const cancel = (not: string) => {
    const index = notificationsAdmin.indexOf(not);
    notificationsAdmin.splice(index, 1);
    localStorage.setItem(
      "notificationAdmin",
      JSON.stringify(notificationsAdmin)
    );
    setRefresh(!refresh);
  };
  return (
    <div
      className="px-20 w-full  flex flex-col items-center  
 relative grow"
    >
      <img
        src={bgImage}
        alt=""
        className="opacity-10  -z-10 top-0 left-0 right-0 absolute h-full object-cover w-full "
      />
      <div className="my-10 text-2xl font-semibold">Moja obaveštenja</div>
      <div className=" w-full max-w-5xl flex  flex-col gap-5">
        {notificationsAdmin.map((not) => {
          return (
            <div
              key={not}
              className="w-full textarea p-0 rounded-sm grid grid-cols-2 place-items-center"
            >
              <div className="textarea col-span-2 rounded-sm text-left bg-white w-full">
                {not}
              </div>
              <div
                onClick={() => allow(not)}
                className="w-full
          mt-5 btn border-none  bg-lightGreen hover:bg-lightGreen  shadow-md hover:shadow-lg text-black   rounded-sm"
              >
                Odobri
              </div>
              <div
                onClick={() => cancel(not)}
                className="w-full
          mt-5 btn border-none  bg-lightGreen hover:bg-lightGreen  shadow-md hover:shadow-lg text-black   rounded-sm"
              >
                Odbij
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkerNotifications;
