import bgImage from "images/panda2.jpg";
import SmallCard from "components/SmallCard";
import BigCard from "components/BigCard";
import { useContext, useState } from "react";
import { animalInfo, animals2, events, users } from "data";
import { AuthContext } from "authContext";
import ErrorPage from "./ErrorPage";

function Home() {
  const numberOfPages = Math.ceil(animals2.length / 5);
  const arrayOfPages = Array.from({ length: numberOfPages }, (v, k) => k + 1);
  const [newPage, setNewPage] = useState<number>(1);
  if (localStorage.length === 0) {
    localStorage.setItem("animals", JSON.stringify(animals2));
    localStorage.setItem("events", JSON.stringify(events));
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem(
      "notificationAdmin",
      JSON.stringify(["a:notAdmin1", "a:notAdmin2"])
    );
  }
  const { user } = useContext(AuthContext);
  if (user?.username === "admin") return <ErrorPage />;

  const animals: animalInfo[] = JSON.parse(
    localStorage.getItem("animals") + ""
  );
  return (
    <div className="relative bg-lightGreen ">
      <img
        src={bgImage}
        alt=""
        className="opacity-20  top-0 left-0 right-0 absolute h-[600px] object-cover w-full object-top"
      />
      <div className="mt-[300px] mx-10 ">
        <div className=" w-full flex flex-col items-center space-y-4">
          <div className="flex gap-7 justify-center flex-wrap mx-32">
            {animals
              .slice((newPage - 1) * 5, newPage * 5)
              .map((animal: any) => {
                return (
                  <div key={animal.name} className="">
                    <SmallCard name={animal.name} image={animal.image} />
                  </div>
                );
              })}
          </div>
          <div className="flex space-x-3 z-10">
            {arrayOfPages.map((pg) => {
              return (
                <div key={pg.valueOf()} className="">
                  <button
                    onClick={() => setNewPage(pg)}
                    className="btn btn-circle bg-white text-text  border-white "
                  >
                    {pg}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap  max-w-7xl gap-7 mx-auto justify-center my-7">
          {events.map((event: any) => {
            return (
              <div key={event.title} className="">
                <BigCard
                  title={event.title}
                  description={event.description}
                  likes={event.likes}
                  image={event.image}
                  whoLiked={event.whoLiked}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
