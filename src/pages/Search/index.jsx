import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
import SearchField from "../../components/SearchField";
import Card from "../../components/Card";
import Swiper from "../../components/Swiper";
import ClickableLink from "../../components/ClickableLink";
import Loading from "../../components/Loading";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import ErrorScreen from "../../components/ErrorScreen";
import useGetData from "../../hooks/useGetData";
import PagesNavigation from "../../components/PagesNavigation";
import usePages from "../../hooks/usePages";
import useWindowWidth from "../../hooks/useWindowWidth";
import Footer from "../../components/Footer";

export default function Search() {
  const { page, previousPage, nextPage } = usePages();
  const [searchParams] = useSearchParams();
  const windowWidth = useWindowWidth();
  const query = searchParams.get("q");
  const movies = useGetData(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  const people = useGetData(
    `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=${page}`
  );

  if (movies.loading || people.loading) {
    return (
      <>
        <Header />
        <SearchField />
        <Loading />
      </>
    );
  }
  if (movies.dataResults.length === 0 && people.dataResults.length === 0) {
    return (
      <>
        <Header />
        <SearchField />
        <ErrorScreen message="No results found" />
        <PagesNavigation
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <SearchField />
      {!movies.loading && !people.loading && (
        <main className="flex flex-col items-center">
          <h2 className="text-center pt-6 text-xl">
            Results for:{" "}
            <span className="font-bold text-primary-color italic">
              "{query}"
            </span>
          </h2>

          <nav className="flex gap-2 justify-center text-primary-color mt-2 sm:gap-4">
            <ClickableLink text={"Movies"} link={"#movies"} />
            <ClickableLink text={"People"} link={"#people"} />
          </nav>

          <Title id="movies">Movies</Title>
          {(movies.dataResults.length > 0 && (
            <>
              {windowWidth < 1024 ? (
                <Swiper listSize={movies.dataResults.length}>
                  {movies.dataResults.map((movie) => (
                    <Card
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page={"movie"}
                    />
                  ))}
                </Swiper>
              ) : (
                <Grid>
                  {movies.dataResults.map((movie) => (
                    <Card
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page={"movie"}
                    />
                  ))}
                </Grid>
              )}
            </>
          )) || <ErrorScreen message="No results found" />}

          <Title id="people">People</Title>
          {(people.dataResults.length > 0 && (
            <>
              {windowWidth < 1024 ? (
                <Swiper listSize={people.dataResults.length}>
                  {people.dataResults.map((person) => (
                    <Card
                      key={person.id}
                      id={person.id}
                      title={person.name}
                      poster_path={person.profile_path}
                      vote_average={person.popularity}
                      page={"person"}
                    />
                  ))}
                </Swiper>
              ) : (
                <Grid>
                  {people.dataResults.map((person) => (
                    <Card
                      key={person.id}
                      id={person.id}
                      title={person.name}
                      poster_path={person.profile_path}
                      vote_average={person.popularity}
                      page={"person"}
                    />
                  ))}
                </Grid>
              )}
            </>
          )) || <ErrorScreen message="No more results" />}
          <PagesNavigation
            page={page}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </main>
      )}
      <Footer />
    </>
  );
}
