import bgImage from "images/panda2.jpg";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SmallCard from "components/SmallCard";
import BigCard from "components/BigCard";
import { useState } from "react";

interface animalInfo {
  name: string;
  image: string;
}
const animals: animalInfo[] = [
  { name: "Sumski ris", image: "/images2/sumskiris.jpg" },
  { name: "Merkat", image: "/images2/merkat.jpg" },
  { name: "Koala", image: "/images2/koala.jpg" },
  { name: "Zebra", image: "/images2/zebra.jpg" },
  { name: "Azijski lav", image: "/images2/azijskilav.jpg" },
  { name: "Merkat", image: "/images2/merkat.jpg" },
  { name: "Koala", image: "/images2/koala.jpg" },
  { name: "Zebra", image: "/images2/zebra.jpg" },
  { name: "Azijski lav", image: "/images2/azijskilav.jpg" },
];
interface eventInfo {
  title: string;
  description: string;
  image: string;
  likes: number;
}
const events: eventInfo[] = [
  {
    title: "Mazoala noću",
    description:
      "Noću u prašumi: Nije strašno, ali u sanjivoj atmosferij i uz odličnu hranu - to je 'Masoala noću', nova ponuda za nezaboravno veče u zoološkom vrtu.",
    likes: 0,
    image: "/images2/events/masoala.jpg",
  },
  {
    title: "Hranjenje žirafa",
    description:
      "Uz pomoć profesionalaca i volontera saznaj zanimljivosti o ovim životinjama, dok ih hraniš. Celokupna zarada od ulaznica za hranjenje biće donirana projektu za žirafe u Keniji.",
    likes: 0,
    image: "/images2/events/giraffenfuetterung.jpg",
  },
  {
    title: "Parada pingvina",
    description:
      "Ukoliko temperatura padne ispod 10stepeni zimi, u periodu od novembra do februara moguće je videti paradu pingvina svako jutro. Jedinstveno iskustvo koje se ne propušta!",
    likes: 0,
    image: "/images2/events/pinguinParada.jpg",
  },
  {
    title: "Akvarijum",
    description:
      "Ovaj dogadjaj je idealan za decu školskog urasta. Deca se takmiče ko može da uoči više različitih vrsta riba, a pobednik dobija besplatnu ulaznicu za sledeću posetu.",
    likes: 0,
    image: "/images2/events/aquarium.jpg",
  },
  {
    title: "Plivanje slonova",
    description:
      "Svake nedelje, ponedeljkom, ne propustite da vidite božanstveno kupanje slonova. Ovaj dogadjaj je pogodan za odrasle i decu svih uzrasta.",
    likes: 0,
    image: "/images2/events/elephantsswimming.jpg",
  },
  {
    title: "Hranjenje slepih miševa",
    description:
      "Hranjenje se odvija svaki drugi vikend u 2 časa. Pored hranjenja, moći ćete da čujete priču o ovim  neverovatnim životinjama. Nemojte propustiti ovaj doživljaj.",
    likes: 0,
    image: "/images2/events/batfeeding.jpg",
  },
];
function Home() {
  const numberOfPages = Math.ceil(animals.length / 5);
  const arrayOfPages = Array.from({ length: numberOfPages }, (v, k) => k + 1);
  const [newPage, setNewPage] = useState<number>(1);
  return (
    // <div className="min-h-screen flex flex-col">
    // {/* <Navbar /> */}
    <div className="relative bg-lightGreen ">
      {/* grow */}
      <img
        src={bgImage}
        alt=""
        //   object-fit: cover;
        //   layout="fill"
        //   objectFit="cover"
        className="opacity-20  top-0 left-0 right-0 absolute h-[600px] object-cover w-full object-top"
      />
      <div className="mt-[300px] mx-10 ">
        <div className=" w-full flex flex-col items-center space-y-4">
          <div className="flex gap-7 justify-center flex-wrap mx-32">
            {animals.slice((newPage - 1) * 5, newPage * 5).map((animal) => {
              return (
                <div className="">
                  <SmallCard name={animal.name} image={animal.image} />
                </div>
              );
            })}
          </div>
          <div className="flex space-x-3 z-10">
            {arrayOfPages.map((pg) => {
              return (
                <div className="">
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
            {/* <button className="btn btn-circle bg-white text-text  border-white ">
                1
              </button>
              <button className="btn btn-circle bg-white text-text border-white">
                2
              </button> */}
          </div>
        </div>

        {/* fixed top-[670px] */}
        <div className="flex flex-wrap  max-w-7xl gap-7 mx-auto justify-center my-7">
          {/* max-w-5xl */}
          {events.map((event) => {
            return (
              <div className="">
                <BigCard
                  title={event.title}
                  description={event.description}
                  likes={event.likes}
                  image={event.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // {/* <Footer /> */}
    // </div>
  );
}

export default Home;
