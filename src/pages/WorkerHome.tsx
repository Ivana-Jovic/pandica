import bgImage from "images/panda2.jpg";
import SmallCard from "components/SmallCard";
import BigCard from "components/BigCard";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { animalInfo, animals2 } from "data";
type IFormInput = {
  picture: string;
  name: string;
  description: string;
};
// const animals: animalInfo[] = [
//   { name: "Sumski ris", image: "/images2/sumskiris.jpg" },
//   { name: "Merkat", image: "/images2/merkat.jpg" },
//   { name: "Koala", image: "/images2/koala.jpg" },
//   { name: "Zebra", image: "/images2/zebra.jpg" },
//   { name: "Azijski lav", image: "/images2/azijskilav.jpg" },
//   { name: "Merkat", image: "/images2/merkat.jpg" },
//   { name: "Koala", image: "/images2/koala.jpg" },
//   { name: "Zebra", image: "/images2/zebra.jpg" },
//   { name: "Azijski lav", image: "/images2/azijskilav.jpg" },
// ];

function WorkerHome() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      picture: "",
      name: "",
      description: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    toast.success("Dodata zivotinja");
  };
  const cancel = () => {
    toast.error("Odustano od dodavanja zivotinje");
  };
  return (
    <div className="relative px-10 pt-10 bg-lightGreen w-full flex flex-col items-center space-y-4">
      <img
        src={bgImage}
        alt=""
        className="opacity-20  top-0 left-0 right-0 absolute h-[500px] object-cover w-full object-top"
      />

      <div className="flex gap-7 justify-center flex-wrap mx-32 max-w-5xl">
        {animals2.map((animal) => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <input
              {...register("picture")}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
            />
          </label>
          <input
            placeholder="ime"
            {...register("name", { required: true })}
            className="h-36 text-center"
          />
          <textarea
            placeholder="Tekst"
            {...register("description", { required: true })}
            className="h-52 text-center col-span-2 w-full"
          />
          <input
            type="submit"
            value="Promeni"
            className="my-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md"
          />
          <button
            onClick={cancel}
            className="my-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md"
          >
            Odustani
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkerHome;
