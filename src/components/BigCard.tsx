import { AuthContext } from "authContext";
import { eventInfo } from "data";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

function BigCard({
  title,
  description,
  image,
  likes,
  whoLiked,
}: {
  title: string;
  description: string;
  image: string;
  likes: number;
  whoLiked: string[];
}) {
  const { user } = useContext(AuthContext);
  const [numOfLikes, setNumOfLikes] = useState<number>(likes);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    toast.success("Liked");
    const events: eventInfo[] = JSON.parse(
      localStorage.getItem("events") ?? ""
    );
    const eventId = events.findIndex((e) => e.title === title);
    if (!events[eventId]) return;
    if (events[eventId].whoLiked.find((n) => n === user?.username)) {
      //already liked
      setNumOfLikes(numOfLikes - 1);
      events[eventId].likes = likes - 1;
      setLiked(false);
      events[eventId].whoLiked = events[eventId].whoLiked.filter((username) => {
        return username !== user?.username;
      });
    } else {
      setNumOfLikes(numOfLikes + 1);
      events[eventId].likes = likes + 1;
      setLiked(true);
      events[eventId].whoLiked.push(user?.username + "");
    }
    localStorage.setItem("events", JSON.stringify(events));
  };

  useEffect(() => {
    if (user && whoLiked.includes(user.username)) {
      setLiked(true);
    }
  }, [user]);

  return (
    <div>
      <div className="card w-[380px] h-[460px] bg-base-100 shadow-xl rounded-sm">
        <figure className="m-3 h-40">
          <img
            src={image}
            alt=""
            className="rounded-sm h-40 w-[350px] object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="text-left">{description}</div>
          {!user && (
            <div className="self-end card-actions ">
              {numOfLikes}
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          )}
          {user && (
            <div
              onClick={() => handleLike()}
              className="card-actions self-end "
            >
              {numOfLikes}
              {!liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BigCard;
