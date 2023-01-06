import bgImage from "images/panda.jpg";
function WorkerNotifications() {
  return (
    <div
      className="px-20 w-full  flex flex-col items-center  
 relative grow"
    >
      <img
        src={bgImage}
        alt=""
        className="opacity-5  top-0 left-0 right-0 absolute h-full object-cover w-full "
      />

      <div className="my-10 text-2xl font-semibold">Moja obaveštenja</div>
      <div className=" w-full max-w-5xl">
        <div className="textarea p-0 rounded-sm grid grid-cols-2 place-items-center">
          <div className="col-span-2 p-5">Zahtev za promo paketom 1</div>
          {/* Todo dohvati iy baye */}
          <div
            className="w-full
          mt-5 btn border-none  bg-lightGreen hover:bg-lightGreen  shadow-md hover:shadow-lg text-black   rounded-sm"
          >
            Odobri
          </div>
          <div
            className="w-full
          mt-5 btn border-none  bg-lightGreen hover:bg-lightGreen  shadow-md hover:shadow-lg text-black   rounded-sm"
          >
            Odbij
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerNotifications;
