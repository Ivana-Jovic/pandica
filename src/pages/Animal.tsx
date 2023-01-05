import { useState } from "react";
import toast from "react-hot-toast";

import bgImage from "images/panda.jpg";
function Animal() {
  const [wantToComm, setWantToComm] = useState<boolean>(false);
  const postComment = () => {
    toast.success("Komentar ostavljen");
    //TODO
  };
  const cancelComment = () => {
    setWantToComm(!wantToComm);
    toast.error("Odustano od postavljanja komentara");
  };
  return (
    <div
      className="px-20 w-full  flex flex-col items-center  
     place-self-center relative "
    >
      <img
        src={bgImage}
        alt=""
        className="opacity-5  top-0 left-0 right-0 absolute h-full object-cover w-full "
      />
      <div className="my-10 text-2xl font-semibold">Sumski ris</div>
      <div className="flex-col lg:flex-row flex gap-14  items-center  ">
        <div className="">
          <img
            src="/images2/sumskiris.jpg"
            alt=""
            className="max-w-[400px] border border-gray-300"
          />
        </div>
        <div className="max-w-[400px] bg-offwhite p-7 ">
          Naćin života: usamljenici, aktivni i danju i noću; imaju odlićan njuh;
          kada love, satima slede žrtvu, ili je ćekaju u zasedi. <br />
          Ishrana: mala jelenska divljać, koze, ovce, zećevi, ptice. <br />{" "}
          Dužina: 90–150 centimetara (sa repom)
          <br /> Težina: 18–38 kilograma.
          <br />
          Razmnožavanje: graviditet traje nešto duže od dva meseca; ženka u maju
          ili junu rađa 2–4 slepa mlada; progledaju posle dve nedelje, a uz
          majku ostaju dok ne navrše prvu godinu. <br />
          Životni vek: 16–18 godina. Ris je najveća evropska maćka. U stanju je
          da ulovi životinju koja je ćetiri puta krupnija od njega.
        </div>
      </div>
      <div className="w-full mb-10 max-w-5xl">
        <div className="my-10 text-2xl font-semibold">
          Komentari drugih korisnika
        </div>
        <div className="textarea  rounded-sm text-left">
          Ovo je jedan komentar
          {/* Todo dohvati iy baye */}
        </div>
        {!wantToComm && (
          <button
            onClick={() => setWantToComm(!wantToComm)}
            className="mt-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md "
          >
            Ostavi komentar
          </button>
        )}
        {wantToComm && (
          <div>
            <div className="mt-10">
              <textarea className="textarea w-full rounded-sm "></textarea>
            </div>
            <div className="flex gap-10 justify-center">
              <button
                onClick={postComment}
                className="mt-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md "
              >
                Postavi
              </button>
              <button
                onClick={cancelComment}
                className="mt-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md "
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
