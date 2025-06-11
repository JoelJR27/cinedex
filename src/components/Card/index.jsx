import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import imageFallback from "../../assets/image_fallback.png";
const imageURL = "https://image.tmdb.org/t/p/original";
export default function Card({ title, id, poster_path, vote_average, page }) {
  const imageLink = `${imageURL + poster_path}`;
  return (
    <div
      id={id}
      className="min-w-[250px] h-[350px] relative lg:w-[10%] hover:scale-105 duration-300"
    >
      <Link to={`/${page}/${id}`}>
        <div className="bg-primary-color rounded-xl w-full h-full flex">
          {(poster_path && (
            <img
              className="h-full rounded-xl w-full hover:opacity-75 duration-300 cursor-pointer min-h-[200px]"
              src={`${imageLink}`}
            />
          )) ?? (
            <img
              className="rounded-xl hover:opacity-75 duration-300 cursor-pointer self-center"
              src={imageFallback}
            />
          )}
        </div>

        <h2 className="absolute bottom-11 left-2 text-white text-shadow-2xs text-shadow-zinc-900 font-medium text-[12px] lg:text-sm">
          {title}
        </h2>
        <span className="absolute bottom-6 left-2 text-white text-sm text-shadow-2xs text-shadow-zinc-900">
          {vote_average ? Math.floor(vote_average / 2) : "N/A"}{" "}
          <FontAwesomeIcon icon={faStar} color="yellow" />
        </span>
        <span className="absolute bottom-0 right-3 text-white text-shadow-2xs text-shadow-zinc-900 text-[12px] md:text-sm lg:text-lg">
          See more...
        </span>
      </Link>
    </div>
  );
}
