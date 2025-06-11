import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchField from "../../components/SearchField";
import Loading from "../../components/Loading";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorScreen from "../../components/ErrorScreen";
import IdsNavigation from "../../components/IdsNavigation";
import ClickableLink from "../../components/ClickableLink";
import useGetData from "../../hooks/useGetData";
import imageFallback from "../../assets/image_fallback.png";
const moviesURL = "https://api.themoviedb.org/3/movie/";
const moviesImage = "https://image.tmdb.org/t/p/original";
export default function Movie() {
  const { id } = useParams();
  const movie = useGetData(`${moviesURL}${id}`);

  if (movie.loading) return <Loading />;
  if (movie.error)
    return (
      <>
        <Header />
        <SearchField />
        <ClickableLink text="Back to Home" link="/" />
        <ErrorScreen message={`Error: ${movie.error}`} />
        <IdsNavigation page="movie" currentId={id} />
        <Footer />
      </>
    );
  return (
    <>
      <Header />
      <SearchField />
      {!movie.loading && !movie.error && movie && (
        <>
          <ClickableLink text="Back to Home" link="/" />
          <main className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 p-10 lg:max-w-7/10 lg:justify-self-center lg:grid lg:grid-cols-2 lg:px-[10%] lg:gap-x-5">
              {(movie.data.backdrop_path && (
                <img
                  className="w-[100%] rounded-sm lg:w-[80%] lg:col-start-1 lg:col-end-3 place-self-center hover:scale-105 duration-300"
                  src={`${moviesImage}${movie.data.backdrop_path}`}
                  alt={`${movie.data.title} poster.`}
                />
              )) || (
                <img
                  className="max-w-1/3 rounded-full lg:w-[80%] lg:col-start-1 lg:col-end-3 place-self-center bg-primary-color"
                  src={imageFallback}
                  alt=""
                />
              )}
              <div className="flex items-center justify-between w-2/2 lg:col-start-1 lg:col-end-3 lg:row-start-2">
                <h2 className="text-black font-bold text-lg xl:text-2xl">
                  {movie.data.title}
                </h2>
                <span className="text-lg text-black">
                  {movie.data.vote_average
                    ? Math.floor(movie.data.vote_average / 2)
                    : "N/A"}{" "}
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                </span>
              </div>
              <p className="text-sm italic text-primary-color block lg:hidden">
                {movie.data.tagline}
              </p>
              <div className="lg:col-start-2 lg:row-start-3">
                <h4 className="font-bold text-black text-sm">Overview</h4>
                <p className="font-inter text-sm lg:text-base">
                  {movie.data.overview ? (
                    movie.data.overview
                  ) : (
                    <strong className="text-red-600">Overview not found</strong>
                  )}
                </p>
                {movie.data.adult && (
                  <p className="font-inter text-sm lg:text-base">
                    <strong className="text-red-600">18+ content</strong>
                  </p>
                )}
              </div>
              <div className="lg:row-end-4 ">
                <p className="text-sm italic text-primary-color hidden lg:block">
                  {movie.data.tagline}
                </p>
                <p className="mb-3 self-start">
                  Release date:{" "}
                  <span className="font-inter font-bold text-black">
                    {movie.data.release_date ? (
                      movie.data.release_date.split("-").reverse().join("/")
                    ) : (
                      <strong className="text-red-600">not found</strong>
                    )}
                  </span>
                </p>
                <p>
                  Budget:{" "}
                  {(movie.data.budget && (
                    <span>
                      {movie.data.budget.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  )) || (
                    <strong className="text-red-600">Budget not found.</strong>
                  )}
                </p>
              </div>
              {movie.data.homepage && (
                <a
                  className="hover-link bg-primary-color text-white p-2 w-1/1 text-center rounded-lg text-sm hover:opacity-80 md:text-base lg:row-start-4 lg:col-end-2"
                  href={movie.data.homepage}
                  target="_blank"
                  rel="noreferrer"
                  title="Visit movie homepage"
                >
                  Visit movie homepage
                </a>
              )}
            </div>
          </main>
        </>
      )}
      <IdsNavigation page="movie" currentId={id} />
      <Footer />
    </>
  );
}
