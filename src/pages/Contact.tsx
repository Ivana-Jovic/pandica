import bgImage from "images/panda.jpg";
function Contact() {
  return (
    <div className="relative grow">
      <img
        src={bgImage}
        alt=""
        //   object-fit: cover;
        //   layout="fill"
        //   objectFit="cover"
        className="opacity-10 -z-10 top-0 left-0 right-0 absolute h-full object-cover w-full "
      />
      {/* //MIKI ovde kao da nije height full em zbog slike, em zbog centriranja vertikalnog */}
      <div
        className="flex  justify-center mt-20
      lg:max-h-[400px] 
     "
      >
        {/* //MIKI */}
        {/* content-center items-center self-center justify-self-center justify-items-center */}
        <div className="  card lg:card-side bg-base-100 rounded-none bg-transparent">
          {/* flex flex-col  place-content-center  place-items-center  place-self-center
       justify-center content-center
      items-center self-center justify-self-center justify-items-center  */}
          <figure>
            <img
              src="/images2/map.jpg"
              alt=""
              className="max-h-[400px] border border-gray-300"
            />
          </figure>
          <div className="card-body my-16 lg:ml-32 font-semibold">
            {/* <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p> */}
            <p>Radimo 365 dana u godini: </p>
            <p>mart do oktobar 9–18</p>
            <p>novembar do februar 9–17</p>
            <br />
            <p>Mali Kalemegdan 811000 Beograd</p>
            <p> +381 65 1234 567 </p>
            <p>pandica@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
