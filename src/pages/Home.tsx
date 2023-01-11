import bgImage from "images/panda2.jpg";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SmallCard from "components/SmallCard";
import BigCard from "components/BigCard";
import { useEffect, useState } from "react";
import { animals2, events, users } from "data";

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
      JSON.stringify(["notAdmin1", "notAdmin2"])
    );
  }

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
            {animals2
              .slice((newPage - 1) * 5, newPage * 5)
              .map((animal: any) => {
                //MIKI
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
                  {/* MIKI ya on click*/}
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

        {/* fixed top-[670px] */}
        <div className="flex flex-wrap  max-w-7xl gap-7 mx-auto justify-center my-7">
          {/* max-w-5xl */}
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
