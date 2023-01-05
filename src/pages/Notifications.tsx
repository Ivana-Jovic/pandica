import bgImage from "images/panda.jpg";
function Notifications() {
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
      <div className="w-full max-w-5xl">
        <div className="textarea  rounded-sm text-left p-5">
          Zaposleni je odobrio vašu kupovinu karata.
          {/* Todo dohvati iy baye */}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
