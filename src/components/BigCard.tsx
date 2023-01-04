// import FavoriteIcon from "@mui/icons-material/Favorite";
function BigCard({
  title,
  description,
  image,
  likes,
}: {
  title: string;
  description: string;
  image: string;
  likes: number;
}) {
  return (
    <div>
      <div className="card w-80 h-[460px] bg-base-100 shadow-xl rounded-sm">
        <figure className="m-3 h-40">
          <img
            src={image}
            alt=""
            className="rounded-sm h-40 w-[300px] object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="text-left">{description}</div>
          <div className="card-actions self-end ">
            {likes} x
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
