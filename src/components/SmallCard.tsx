import { useNavigate } from "react-router-dom";

function SmallCard({ name, image }: { name: string; image: string }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/animal/${name}`)}
      className="card cursor-pointer card-compact w-40 bg-base-100 shadow-xl rounded-sm"
    >
      <figure className="">
        <img src={image} alt="" className="h-40 object-cover" />
      </figure>
      <div className="card-body -m-3 ">
        <h2 className="card-title flex justify-center">{name}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
