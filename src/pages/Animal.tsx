import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import bgImage from "images/panda.jpg";
import { useParams } from "react-router-dom";
import { animalInfo } from "data";
import { AuthContext } from "authContext";
import Button from "components/Button";

function Animal() {
  const { user } = useContext(AuthContext);
  const [wantToComm, setWantToComm] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const postComment = () => {
    toast.success("Komentar ostavljen");
    const animals: animalInfo[] = JSON.parse(
      localStorage.getItem("animals") ?? ""
    );
    localStorage.setItem(
      "animals",
      JSON.stringify(
        animals.map((animal) => {
          if (animal.name === name)
            animal.comments.push(user?.username + ": " + newComment);
          return animal;
        })
      )
    );

    setCurrAnimal((prev) => {
      if (
        !prev?.comments.some(
          (comm) => comm === user?.username + ": " + newComment
        )
      )
        prev?.comments.push(user?.username + ": " + newComment);
      return prev;
    });
    setWantToComm(!wantToComm);
    setNewComment("");
  };
  const cancelComment = () => {
    setWantToComm(!wantToComm);
    setNewComment("");
    toast.error("Odustano od postavljanja komentara");
  };

  let { name } = useParams();
  const [currAnimal, setCurrAnimal] = useState<animalInfo>();
  const animals: animalInfo[] = JSON.parse(
    localStorage.getItem("animals") ?? ""
  );

  useEffect(() => {
    setCurrAnimal(animals.find((animal) => animal.name === name));
  }, []);

  return (
    <div
      className="px-20 w-full  flex flex-col items-center  
     place-self-center relative grow"
    >
      <img
        src={bgImage}
        alt=""
        className="opacity-5 -z-10 top-0 left-0 right-0 absolute h-full object-cover w-full "
      />
      <div className="my-10 text-2xl font-semibold">{currAnimal?.name}</div>

      <div className="flex-col lg:flex-row flex gap-14  items-center  ">
        <div className="">
          <img
            src={currAnimal?.image}
            alt=""
            className="max-w-[400px] border border-gray-300"
          />
        </div>
        <div className="max-w-[400px] bg-white p-7 ">
          {currAnimal?.description}
        </div>
      </div>
      <div className="w-full mb-10 max-w-5xl">
        <div className="my-10 text-2xl font-semibold">
          Komentari drugih korisnika
        </div>
        <div className="flex gap-7 justify-center flex-wrap max-w-5xl">
          {currAnimal?.comments.map((comment) => {
            return (
              <div
                key={comment}
                className="textarea  rounded-sm text-left bg-white w-full"
              >
                <div className="font-bold">{comment.split(":")[0]}</div>

                {comment.split(":")[1]}
              </div>
            );
          })}
        </div>
        {user && user.username !== "admin" && !wantToComm && (
          <Button onClick={() => setWantToComm(!wantToComm)}>
            Ostavi komentar
          </Button>
        )}

        {wantToComm && (
          <div>
            <div className="mt-10">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="textarea w-full rounded-sm "
              ></textarea>
            </div>
            <div className="flex gap-10 justify-center">
              <Button onClick={postComment}>Postavi</Button>
              <Button onClick={cancelComment}>Ponisti</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Animal;
