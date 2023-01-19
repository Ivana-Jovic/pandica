import bgImage from "images/panda2.jpg";
import SmallCard from "components/SmallCard";
import { useContext, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { animalInfo } from "data";
import ErrorPage from "./ErrorPage";
import { AuthContext } from "authContext";
import Button from "components/Button";
type IFormInput = {
  picture: string;
  name: string;
  description: string;
};

function WorkerHome() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const selectedPicture = useRef<string>("");
  const animals: animalInfo[] = JSON.parse(
    localStorage.getItem("animals") + ""
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      // picture: "",
      name: "",
      description: "",
    },
  });
  const { user } = useContext(AuthContext);
  if (user?.username !== "admin") return <ErrorPage />;

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    toast.success("Dodata zivotinja");
    const animals: animalInfo[] = JSON.parse(
      localStorage.getItem("animals") ?? ""
    );
    const newAnimal: animalInfo = {
      name: data.name,
      image:
        selectedPicture.current !== ""
          ? selectedPicture.current
          : "/images2/zebra.jpg",
      description: data.description,
      comments: [],
    };
    animals.push(newAnimal);
    localStorage.setItem("animals", JSON.stringify(animals));
    setRefresh(!refresh);
    restart();
  };
  const restart = () => {
    selectedPicture.current = "";
    reset({
      // picture: "",
      name: "",
      description: "",
    });
  };
  const cancel = () => {
    toast.error("Odustano od dodavanja zivotinje");
    restart();
  };
  const addPicture = (picture: string) => {
    selectedPicture.current = picture;
  };
  return (
    <div className="relative px-10 pt-10 bg-lightGreen w-full flex flex-col items-center space-y-4">
      <img
        src={bgImage}
        alt=""
        className="opacity-20  top-0 left-0 right-0 absolute h-[500px] object-cover w-full object-top"
      />

      <div className="flex gap-7 justify-center flex-wrap mx-32 max-w-5xl">
        {animals.map((animal) => {
          return (
            <div key={animal.name} className="">
              <SmallCard name={animal.name} image={animal.image} />
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 place-items-center gap-7 my-10">
          <label className="">
            <div className="grid grid-cols-2">
              <img
                src="/images2/zebra.jpg"
                alt=""
                className="h-24 w-24 object-cover cursor-pointer hover:shadow-2xl active:border-4"
                onClick={() => {
                  addPicture("/images2/zebra.jpg");
                }}
              />
              <img
                src="/images2/koala.jpg"
                alt=""
                className="h-24 w-24 object-cover cursor-pointer hover:shadow-2xl active:border-4"
                onClick={() => {
                  addPicture("/images2/koala.jpg");
                }}
              />
              <img
                src="/images2/merkat.jpg"
                alt=""
                className="h-24 w-24 object-cover cursor-pointer hover:shadow-2xl active:border-4"
                onClick={() => {
                  addPicture("/images2/merkat.jpg");
                }}
              />
              <img
                src="/images2/nosorog.jpg"
                alt=""
                className="h-24 w-24 object-cover cursor-pointer hover:shadow-2xl active:border-4"
                onClick={() => {
                  addPicture("/images2/nosorog.jpg");
                }}
              />
            </div>
            {/* <input
              {...register("picture")}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
            /> */}
          </label>
          <input
            placeholder="ime"
            {...register("name", { required: true })}
            className="h-48 text-center"
          />
          <textarea
            placeholder="Tekst"
            {...register("description", { required: true })}
            className="h-52 text-center col-span-2 w-full"
          />
          <input
            type="submit"
            value="Promeni"
            className="my-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md"
          />
          <Button onClick={cancel}>Odustani</Button>
        </div>
        <div className="pb-10">
          {(errors.description || errors.name) && "Sva polja su obavezna"}
        </div>
      </form>
    </div>
  );
}

export default WorkerHome;
