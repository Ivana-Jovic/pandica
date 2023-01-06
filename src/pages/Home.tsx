import bgImage from "images/panda2.jpg";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SmallCard from "components/SmallCard";
import BigCard from "components/BigCard";
import { useEffect, useState } from "react";

interface animalInfo {
  name: string;
  image: string;
  description: string;
  comments: string[];
}
const des: string =
  "       Naćin života: usamljenici, aktivni i danju i noću; imaju odlićan njuh;" +
  "kada love, satima slede žrtvu, ili je ćekaju u zasedi. <br />" +
  "Ishrana: mala jelenska divljać, koze, ovce, zećevi, ptice. <br />" +
  "Dužina: 90–150 centimetara (sa repom)" +
  "<br /> Težina: 18–38 kilograma." +
  "<br />" +
  "Razmnožavanje: graviditet traje nešto duže od dva meseca; ženka u maju" +
  "ili junu rađa 2–4 slepa mlada; progledaju posle dve nedelje, a uz" +
  "majku ostaju dok ne navrše prvu godinu. <br />" +
  "Životni vek: 16–18 godina. Ris je najveća evropska maćka. U stanju je" +
  " da ulovi životinju koja je ćetiri puta krupnija od njega.";
const animals2: animalInfo[] = [
  {
    name: "Sumski ris",
    image: "/images2/sumskiris.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Merkat",
    image: "/images2/merkat.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Koala",
    image: "/images2/koala.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Zebra",
    image: "/images2/zebra.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Azijski lav",
    image: "/images2/azijskilav.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Merkat",
    image: "/images2/merkat.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Koala",
    image: "/images2/koala.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Zebra",
    image: "/images2/zebra.jpg",
    description: des,
    comments: [],
  },
  {
    name: "Azijski lav",
    image: "/images2/azijskilav.jpg",
    description: des,
    comments: [],
  },
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
  const numberOfPages = Math.ceil(animals2.length / 5);
  const arrayOfPages = Array.from({ length: numberOfPages }, (v, k) => k + 1);
  const [newPage, setNewPage] = useState<number>(1);
  localStorage.setItem("animals", JSON.stringify(animals2));

  // const a: animalInfo[] = JSON.parse(localStorage.getItem("animals") + "");

  // localStorage.setItem(
  //   "animals",
  //   JSON.stringify(
  //     a.concat({
  //       name: "Sumski ris2",
  //       image: "/images2/sumskiris.jpg",
  //       description: des,
  //       comments: [],
  //     })
  //   )
  // );
  // const q = query(
  //   // collection(getFirestore(), "animals")
  //   // where("name", "==", "Sumski ris")
  //   // orderBy("createdAt", "desc")
  // );
  // const animals = useCollectionData(q);
  // const [an, setAn] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  // const bla = async () => {
  //   const querySnapshot = await getDocs(collection(db, "animals"));
  //   setAn(querySnapshot.docs);
  //   console.log(querySnapshot.docs.length);
  // };
  // useEffect(() => {
  //   bla();
  //   console.log(an.length);
  // }, [an]);

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
                  <div key={animal} className="">
                    <SmallCard name={animal.name} image={animal.image} />
                  </div>
                );
              })}
          </div>
          <div className="flex space-x-3 z-10">
            {arrayOfPages.map((pg) => {
              return (
                <div key={pg} className="">
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
              <div key={event} className="">
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
  );
}

export default Home;
