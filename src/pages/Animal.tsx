import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import bgImage from "images/panda.jpg";
import { useParams } from "react-router-dom";
import { animalInfo } from "data";
import { AuthContext } from "authContext";

function Animal() {
  const { user } = useContext(AuthContext);
  const [wantToComm, setWantToComm] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const postComment = () => {
    toast.success("Komentar ostavljen");
    const a: animalInfo[] = JSON.parse(localStorage.getItem("animals") + "");
    for (let i = 0; i < a.length; i++) {
      if (a[i].name === name) {
        a[i].comments.push(user?.username + ": " + newComment);
        break;
      }
    }
    localStorage.setItem("animals", JSON.stringify(a));
    setWantToComm(!wantToComm);
    setNewComment("");
  };
  const cancelComment = () => {
    setWantToComm(!wantToComm);
    setNewComment("");
    toast.error("Odustano od postavljanja komentara");
  };

  let { name } = useParams(); //MIKI tim prome
  const [currAnimal, setCurrAnimal] = useState<animalInfo>();
  const a: animalInfo[] = JSON.parse(localStorage.getItem("animals") + "");

  useEffect(() => {
    for (let i = 0; i < a.length; i++) {
      if (a[i].name === name) {
        // MIKI sta raditi sa tipom use state use ref ;
        setCurrAnimal(a[i]);
        //     //  da li treba use efef
        break;
      }
    }
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
          <button
            onClick={() => setWantToComm(!wantToComm)}
            className="mt-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md "
          >
            Ostavi komentar
          </button>
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
              <button
                onClick={postComment}
                className="mt-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md "
              >
                Postavi
              </button>
              <button
                onClick={cancelComment}
                className="mt-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md "
              >
                Ponisti
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Animal;
