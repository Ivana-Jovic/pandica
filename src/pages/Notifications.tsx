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

function Notifications() {
  const users: userInfo[] = JSON.parse(localStorage.getItem("users") + "");
  const currUser = JSON.parse(localStorage.getItem("currUser") + "");
  var user = users.find((user) => {
    // setCurrUser(user);
    return (
      user.username === currUser.username && user.password === currUser.password
    );
  });
  // if (uu) {
  // }
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
      <div className="w-full max-w-5xl">
        {/* <div className="tksextarea  rounded-sm text-left p-5">
          Zaposleni je odobrio vašu kupovinu karata.
          {/* Todo dohvati iy baye */}
        {/* </div> */}
        <div className="flex gap-7 justify-center flex-wrap max-w-5xl">
          {user &&
            user?.notifications.map((not) => {
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
