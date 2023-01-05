import TicketCard from "components/TicketCard";
import TicketCardPicture from "components/TicketCardPicture";
import { useState } from "react";
import toast from "react-hot-toast";

function Tickets() {
  const [count, seCount] = useState<number>(1);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>("");
  const [selectedItemPrice, setSelectedItemPrice] = useState<number>(0);
  const [promo, setPromo] = useState<string>("");

  const handleChange = (event: any) => {
    setPromo(event.target.value);
    if (event.target.value === "promo") {
      setSelectedItemPrice(selectedItemPrice * 0.9);
    }
  };

  const kupi = () => {
    toast.success("Kupljena ulaznica");
  };

  const odustani = () => {
    toast.error("Odustano od kupovine ulaznica");
    setSelectedItemPrice(0);
    setSelectedItemTitle("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 flex gap-20 flex-wrap justify-center">
        <TicketCard
          title="Pojedinačna ulaznica"
          description="400rsd"
          price={400}
          setSelectedItemTitle={setSelectedItemTitle}
          setSelectedItemPrice={setSelectedItemPrice}
        />
        <TicketCard
          title="Grupna ulaznica"
          description="350rsd"
          price={350}
          setSelectedItemTitle={setSelectedItemTitle}
          setSelectedItemPrice={setSelectedItemPrice}
        />
      </div>
      <div className=" mt-20 mb-10 flex gap-20 flex-wrap justify-center">
        <TicketCardPicture
          title="Promotivni paket 1"
          description=" Uz kupovinu 2 karte dobijate besplatno piće u kafeu"
          price={800}
          setSelectedItemTitle={setSelectedItemTitle}
          setSelectedItemPrice={setSelectedItemPrice}
        />
        <TicketCardPicture
          title="Promotivni paket 2"
          description=" Uz kupovinu 3 karte dobijate suvenir na poklon"
          price={1200}
          setSelectedItemTitle={setSelectedItemTitle}
          setSelectedItemPrice={setSelectedItemPrice}
        />
        <TicketCardPicture
          title="Promotivni paket 3"
          description="Uz kupovinu 4 karte dobijate privatnu turu u trajanju od 30 min"
          price={1600}
          setSelectedItemTitle={setSelectedItemTitle}
          setSelectedItemPrice={setSelectedItemPrice}
        />
      </div>
      {selectedItemTitle && (
        <div className="flex flex-col w-96 gap-6 mb-10  mt-20">
          <div className="flex justify-between px-5">
            <div>{selectedItemTitle}</div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  if (count > 1) seCount(count - 1);
                }}
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              &nbsp; {count} komada &nbsp;
              <button onClick={() => seCount(count + 1)} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr className="border-black" />
          <div className="flex justify-between px-5">
            <div>Promo kod</div>
            <div>
              <input
                value={promo}
                onChange={handleChange}
                type="text"
                className="outline-none w-36"
              />
            </div>
          </div>
          <hr className=" border-black" />
          <div className="flex justify-between px-5">
            <div className="flex items-center">
              Ukupno:
              {/* <div className="text-[8px]">(bez promo koda):</div> */}
            </div>
            <div>{selectedItemPrice * count} rsd</div>
          </div>
          <hr className="border-black" />
          <div className="flex gap-7 justify-center">
            <button
              onClick={kupi}
              className="btn border-none w-28 bg-offwhite hover:bg-offwhite shadow-md hover:shadow-lg text-black   rounded-md "
            >
              Kupi
            </button>
            <button
              onClick={odustani}
              className="btn border-none w-28 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md "
            >
              Odustani
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tickets;
