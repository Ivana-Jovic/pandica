function SmallCard({ name, image }: { name: string; image: string }) {
  return (
    <div>
      <div className="card card-compact w-40 bg-base-100 shadow-xl rounded-sm">
        <figure className="">
          <img src={image} alt="" className="h-40 object-cover" />
        </figure>
        <div className="card-body -m-3 ">
          <h2 className="card-title flex justify-center">{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
