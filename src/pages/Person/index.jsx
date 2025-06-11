import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import SearchField from "../../components/SearchField";
import Loading from "../../components/Loading";
import ClickableLink from "../../components/ClickableLink";
import PagesNavigation from "../../components/IdsNavigation";
import imageFallback from "../../assets/image_fallback.png";
import useGetData from "../../hooks/useGetData";
export default function Person() {
  const image = `https://image.tmdb.org/t/p/original`;
  const { id } = useParams();
  const person = useGetData(`https://api.themoviedb.org/3/person/${id}`);
  if (person.loading) return <Loading />;
  return (
    <>
      <Header />
      <SearchField />
      <ClickableLink text="Back to Home" link="/" />
      {!person.loading && (
        <div className="flex flex-col justify-center items-center p-5 mx-auto lg:p-20 xl:w-3/4">
          {person.data.name ? (
            <h1 className="text-2xl font-bold text-primary-color p-4">
              {person.data.name}
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-red-600 p-4">
              Name not found!
            </h1>
          )}
          {(person.data.profile_path && (
            <img
              className="w-1/2 rounded-2xl md:w-1/4 md:h-1/2 xl:w-1/5"
              src={image + person.data?.profile_path}
              alt={`${person.data?.name} photo.`}
            />
          )) || (
            <img
              className="w-1/2 rounded-2xl md:w-1/4 md:h-1/2 xl:w-1/5 bg-primary-color"
              src={imageFallback}
              alt={`${person.data?.name} photo.`}
            />
          )}
          {person.data?.imdb_id && (
            <a
              className="text-md my-4 hover:underline decoration-black cursor-pointer animate-ease-in"
              href={`https://www.imdb.com/name/${person.data?.imdb_id}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <strong className="text-black font-medium">See on IMDb</strong>
            </a>
          )}
          {person.data?.birthday && (
            <h2 className="text-lg font-medium text-primary-color self-start">
              Birthday:{" "}
              <strong className="text-black px-2">
                {person.data?.birthday.split("-").reverse().join("/")}
              </strong>
            </h2>
          )}
          {person.data?.deathday && (
            <h2 className="text-lg font-medium text-primary-color self-start my-2">
              Deathday:
              <strong className="text-black px-2">
                {person.data?.deathday.split("-").reverse().join("/")}
              </strong>
            </h2>
          )}
          {person.data?.known_for_department && (
            <h2 className="text-lg font-medium text-primary-color self-start my-2">
              Known for:{" "}
              <strong className="text-black px-2">
                {person.data?.known_for_department}
              </strong>
            </h2>
          )}
          <h2 className="text-lg font-medium text-primary-color self-start my-4">
            Biography
          </h2>
          {(person.data?.biography && (
            <p className="self-start text-sm text-black lg:text-base">
              {person.data?.biography.trim()}
            </p>
          )) || (
            <p className="text-sm text-red-600 self-start">
              No biography available.
            </p>
          )}
          {person.data?.place_of_birth && (
            <h2 className="text-lg font-medium text-primary-color self-start my-4">
              Place of birth:
              <strong className="text-black px-2">
                {person.data?.place_of_birth}
              </strong>
            </h2>
          )}
        </div>
      )}
      <PagesNavigation page="person" currentId={id} />
    </>
  );
}
