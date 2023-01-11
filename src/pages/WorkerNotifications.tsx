import bgImage from "images/panda.jpg";

interface userInfo {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  password: string;
  notifications: string[];
}

function WorkerNotifications() {
  const notificationsAdmin: string[] = JSON.parse(
    localStorage.getItem("notificationAdmin") + ""
  );
  // var uu = users.find((user) => {
  //   return user.username === "admin" && user.password === "123";
  // });
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
            <div className="w-full textarea p-0 rounded-sm grid grid-cols-2 place-items-center">
              <div
                key={not}
                className="textarea col-span-2 rounded-sm text-left bg-white w-full"
              >
                {not}
              </div>
              <div
                className="w-full
          mt-5 btn border-none  bg-lightGreen hover:bg-lightGreen  shadow-md hover:shadow-lg text-black   rounded-sm"
              >
                Odobri
              </div>
              <div
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
