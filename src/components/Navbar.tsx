import logo from "images/logo.png";
function Navbar() {
  return (
    <div className="w-full bg-darkGreen px-10 py-3 grid grid-cols-2 items-center">
      {/* <a href="/"> */}
      <img src={logo} alt="" height="60" width="60" />
      {/* </a> */}
      <div className="flex justify-end space-x-10 font-bold">
        <div>POCETNA</div>
        <div>ULAZNICE</div>
        <div>KONTAKT</div>
        <div>PRIJAVA</div>
      </div>
    </div>
  );
}

export default Navbar;
