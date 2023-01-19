import bgImage from "images/panda.jpg";
import Register from "components/Register";
import { useContext, useState } from "react";
import { AuthContext } from "authContext";
import ErrorPage from "./ErrorPage";
import Button from "components/Button";

function Profile() {
  const { user } = useContext(AuthContext);
  const [changeProfile, setChangeProfile] = useState<boolean>(false);
  if (!user || user?.username === "admin") return <ErrorPage />;

  return (
    <div className="flex flex-col items-center relative grow">
      <img
        src={bgImage}
        alt=""
        className="opacity-5  -z-10 top-0 left-0 right-0 absolute h-full object-cover w-full "
      />
      <div className="my-10 text-2xl font-semibold">Profile</div>
      {user && !changeProfile && (
        <div className=" text-left grid grid-cols-2 items-center gap-x-8 space-y-3 mt-10">
          <div>Ime</div>
          <div>{user.firstName}</div>
          <div>Prezime</div>
          <div>{user.lastName}</div>
          <div>Telefon</div>
          <div>{user.telephone}</div>
          <div>Adresa</div>
          <div>{user.adress}</div>
          <div>Korisnicko ime</div>
          <div>{user.username}</div>
          <div className="col-span-2 flex justify-center">
            <Button
              onClick={() => {
                setChangeProfile(true);
              }}
            >
              Promena
            </Button>
          </div>
        </div>
      )}
      {changeProfile && (
        <Register inPopup={false} setChangeProfile={setChangeProfile} />
      )}
    </div>
  );
}

export default Profile;
