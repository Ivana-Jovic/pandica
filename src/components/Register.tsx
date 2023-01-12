import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userInfo } from "data";
import { useContext } from "react";
import { AuthContext } from "authContext";

type IFormInput = {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  oldPassword: string;
  newPassword: string;
};

function Register({
  inPopup,
  action,
}: {
  inPopup: boolean;
  action?: () => void;
}) {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      adress: "",
      username: "",
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    if (!inPopup && data.oldPassword !== "") {
      if (data.newPassword === "") {
        toast.error("Nova lozinka ne sme biti prazna");
        return;
      }
      if (data.oldPassword !== user?.password) {
        toast.error("Ne poklapa se lozinka");
        return;
      }
    }
    const users: userInfo[] = JSON.parse(localStorage.getItem("users") + "");
    const newUser: userInfo = {
      firstName: data.firstName === "" ? user?.firstName + "" : data.firstName,
      lastName: data.lastName === "" ? user?.lastName + "" : data.lastName,
      telephone: data.telephone === "" ? user?.telephone + "" : data.telephone,
      adress: data.adress === "" ? user?.adress + "" : data.adress,
      username: data.username === "" ? user?.username + "" : data.username,
      password:
        data.oldPassword === "" ? user?.password + "" : data.newPassword,
      notifications: !inPopup && user?.notifications ? user?.notifications : [],
    };

    if (!inPopup) {
      toast.success("Promenjeni podaci");
      const u = users.find((uu) => {
        return uu.username === user?.username;
      });
      const index = u ? users.indexOf(u) : -2; //iz nekog rayloga ne moze user iy konteksta
      users[index] = newUser;
      localStorage.setItem("currUser", JSON.stringify(newUser));
      setUser(newUser);
      navigate("/");
    }

    if (inPopup) {
      const u = users.find((uu) => {
        return uu.username === data.username;
      });
      if (u) {
        toast.error("Morate odabrati drugo korisnicko ime");
        return;
      }
      reset({
        firstName: "",
        lastName: "",
        telephone: "",
        adress: "",
        username: "",
        oldPassword: "",
        newPassword: "",
      });

      toast.success("Registrovani ste");
      localStorage.setItem("currUser", JSON.stringify(newUser));
      setUser(newUser);

      action?.(); //popup
      users.push(newUser);
    }

    localStorage.setItem("users", JSON.stringify(users));
  };

  const cancel = () => {
    toast.error("Odustano od promene podtaka");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="grid grid-cols-2 gap-5 justify-between 
        text-left w-[450px]"
        >
          <label className="">Ime</label>
          <input
            {...register("firstName", { required: inPopup ? true : false })}
          />
          <label className="">Prezime</label>
          <input
            {...register("lastName", { required: inPopup ? true : false })}
          />
          <label className="">Telefon</label>
          <input
            {...register("telephone", { required: inPopup ? true : false })}
          />
          <label className="">Adresa</label>
          <input
            {...register("adress", { required: inPopup ? true : false })}
          />
          {inPopup && <label className="">Korisnicko ime</label>}
          {inPopup && (
            <input
              {...register("username", { required: inPopup ? true : false })}
            />
          )}
          <label className="">{inPopup ? "Lozinka" : "Stara lozinka"}</label>
          <input
            {...register("oldPassword", { required: inPopup ? true : false })}
          />
          {!inPopup && <label className="">Nova lozinka</label>}
          {!inPopup && (
            <input
              {...register("newPassword", { required: inPopup ? true : false })}
            />
          )}
        </div>
        <div className="flex gap-7 justify-center mt-7">
          <input
            type="submit"
            value={inPopup ? "Registruj se" : "Promeni"}
            className="my-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md"
          />
          {!inPopup && (
            <button
              onClick={cancel}
              className="my-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md"
            >
              Odustani
            </button>
          )}
        </div>
      </form>
      <div>
        <div>
          {(errors.firstName ||
            errors.lastName ||
            errors.telephone ||
            errors.adress ||
            errors.username ||
            errors.oldPassword ||
            errors.newPassword) &&
            "Sva polja su obavezna"}
        </div>
      </div>
    </div>
  );
}

export default Register;
