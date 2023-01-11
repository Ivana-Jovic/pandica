export interface animalInfo {
  name: string;
  image: string;
  description: string;
  comments: string[];
}
const des: string =
  "       Naćin života: usamljenici, aktivni i danju i noću; imaju odlićan njuh;" +
  "kada love, satima slede žrtvu, ili je ćekaju u zasedi." +
  "Ishrana: mala jelenska divljać, koze, ovce, zećevi, ptice. " +
  "Dužina: 90–150 centimetara (sa repom)" +
  "Težina: 18–38 kilograma." +
  "Razmnožavanje: graviditet traje nešto duže od dva meseca; ženka u maju" +
  "ili junu rađa 2–4 slepa mlada; progledaju posle dve nedelje, a uz" +
  "majku ostaju dok ne navrše prvu godinu. " +
  "Životni vek: 16–18 godina. Ris je najveća evropska maćka. U stanju je" +
  " da ulovi životinju koja je ćetiri puta krupnija od njega.";
export const animals2: animalInfo[] = [
  {
    name: "Sumski ris",
    image: "/images2/sumskiris.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Merkat",
    image: "/images2/merkat.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Koala",
    image: "/images2/koala.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Zebra",
    image: "/images2/zebra.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Azijski lav",
    image: "/images2/azijskilav.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Azijski slon",
    image: "/images2/azijskislon.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Orangutan",
    image: "/images2/orangutan.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Zirafa",
    image: "/images2/zirafa.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Gorila",
    image: "/images2/gorila.jpg",
    description: des,
    comments: ["Ovo je komentar 1", "Ovo je komentar 2"],
  },
  {
    name: "Nosorog",
    image: "/images2/nosorog.jpg",
    description: des,
    comments: [],
  },
];
export interface eventInfo {
  title: string;
  description: string;
  image: string;
  likes: number;
  whoLiked: string[];
}
export const events: eventInfo[] = [
  {
    title: "Mazoala noću",
    description:
      "Noću u prašumi: Nije strašno, ali u sanjivoj atmosferij i uz odličnu hranu - to je 'Masoala noću', nova ponuda za nezaboravno veče u zoološkom vrtu.",
    likes: 1,
    image: "/images2/events/masoala.jpg",
    whoLiked: ["ivana"],
  },
  {
    title: "Hranjenje žirafa",
    description:
      "Uz pomoć profesionalaca i volontera saznaj zanimljivosti o ovim životinjama, dok ih hraniš. Celokupna zarada od ulaznica za hranjenje biće donirana projektu za žirafe u Keniji.",
    likes: 1,
    image: "/images2/events/giraffenfuetterung.jpg",
    whoLiked: ["a"],
  },
  {
    title: "Parada pingvina",
    description:
      "Ukoliko temperatura padne ispod 10stepeni zimi, u periodu od novembra do februara moguće je videti paradu pingvina svako jutro. Jedinstveno iskustvo koje se ne propušta!",
    likes: 0,
    image: "/images2/events/pinguinParada.jpg",
    whoLiked: [],
  },
  {
    title: "Akvarijum",
    description:
      "Ovaj dogadjaj je idealan za decu školskog urasta. Deca se takmiče ko može da uoči više različitih vrsta riba, a pobednik dobija besplatnu ulaznicu za sledeću posetu.",
    likes: 0,
    image: "/images2/events/aquarium.jpg",
    whoLiked: [],
  },
  {
    title: "Plivanje slonova",
    description:
      "Svake nedelje, ponedeljkom, ne propustite da vidite božanstveno kupanje slonova. Ovaj dogadjaj je pogodan za odrasle i decu svih uzrasta.",
    likes: 0,
    image: "/images2/events/elephantsswimming.jpg",
    whoLiked: [],
  },
  {
    title: "Hranjenje slepih miševa",
    description:
      "Hranjenje se odvija svaki drugi vikend u 2 časa. Pored hranjenja, moći ćete da čujete priču o ovim  neverovatnim životinjama. Nemojte propustiti ovaj doživljaj.",
    likes: 0,
    image: "/images2/events/batfeeding.jpg",
    whoLiked: [],
  },
];
export interface userInfo {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  password: string;
  notifications: string[];
}
export const users: userInfo[] = [
  {
    firstName: "admin",
    lastName: "admin",
    telephone: "123",
    adress: "admin",
    username: "admin",
    password: "123",
    notifications: ["n1", "n2"],
  },
  {
    firstName: "a",
    lastName: "a",
    telephone: "a",
    adress: "a",
    username: "a",
    password: "a",
    notifications: ["nn", "nnn"],
  },
];
