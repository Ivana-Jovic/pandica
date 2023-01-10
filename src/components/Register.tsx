import { useForm, SubmitHandler } from "react-hook-form";
import bgImage from "images/panda.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type IFormInput = {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  oldPassword: string;
  newPassword: string;
};

interface userInfo {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  password: string;
  notifications: string[];
}

function Register({
  inPopup,
  action,
}: {
  inPopup: boolean;
  action?: () => void;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      adress: "",
      username: "",
      oldPassword: "", //TODO from db
      newPassword: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    toast.success("Promenjeni podaci");
    const u: userInfo[] = JSON.parse(localStorage.getItem("users") + "");
    // const u: userInfo[] = [];
    const newUser: userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      telephone: data.telephone,
      adress: data.adress,
      username: data.username,
      password: data.oldPassword,
      notifications: [],
    };
    //TODO promena podataka
    // u.find((user)=>{
    //     return data.username

    // })
    // for (let i = 0; i < a.length; i++) {
    //   if (a[i].name === name) {
    //     a[i].comments.push(newComment);
    //     break;
    //   }
    // }
    if (inPopup) {
      localStorage.setItem("currUser", JSON.stringify(newUser));
      action?.();
    }
    u.push(newUser);
    console.log(u);
    localStorage.setItem("users", JSON.stringify(u));
  };
  const navigate = useNavigate();

  const cancel = () => {
    toast.error("Odustano od promene podtaka");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center mt-5">
      {/* <div className="my-10 text-2xl font-semibold">Profile</div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="grid grid-cols-2 gap-5 justify-between 
        text-left w-[450px]"
        >
          <label className="">Ime</label>
          <input {...register("firstName", { required: "aaaas" })} />
          <label className="">Prezime</label>
          <input {...register("lastName", { required: true })} />
          <label className="">Telefon</label>
          <input {...register("telephone", { required: true })} />
          <label className="">Adresa</label>
          <input {...register("adress", { required: true })} />
          <label className="">Korisnicko ime</label>
          <input {...register("username", { required: true })} />
          <label className="">Stara lozinka</label>
          <input {...register("oldPassword", { required: true })} />
          <label className="">Nova lozinka</label>
          <input {...register("newPassword", { required: true })} />
        </div>
        <div className="flex gap-7 justify-center mt-7">
          <input
            type="submit"
            value="Promeni"
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
