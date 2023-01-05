import { Dispatch } from "react";

function TicketCardPicture({
  title,
  description,
  price,
  setSelectedItemTitle,
  setSelectedItemPrice,
}: {
  title: string;
  description: string;
  price: number;
  setSelectedItemTitle: Dispatch<React.SetStateAction<string>>;
  setSelectedItemPrice: Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col w-72 relative shadow-md">
      <div className="w-72  ">
        <img
          src="images2/panda.jpg"
          alt=""
          className="absolute object-cover opacity-10"
        />
      </div>
      <div className="mt-7 ">
        <div className="font-semibold text-xl">{title}</div>
        <div className="mt-12">{description}</div>
      </div>
      <div>
        <button
          onClick={() => {
            setSelectedItemTitle(title);
            setSelectedItemPrice(price);
          }}
          className="btn w-full mt-10 border-none  bg-darkGreen hover:bg-darkGreen hover:shadow-lg text-black -mb-8  rounded-sm rounded-t-none"
        >
          Ubaci u korpu &nbsp;
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TicketCardPicture;
