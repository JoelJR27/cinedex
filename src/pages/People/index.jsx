import Header from "../../components/Header";
import SearchField from "../../components/SearchField";
import Loading from "../../components/Loading";
import useGetData from "../../hooks/useGetData";
import Card from "../../components/Card";
import Swiper from "../../components/Swiper";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import usePages from "../../hooks/usePages";
import PagesNavigation from "../../components/PagesNavigation";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function People() {
  const { page, previousPage, nextPage } = usePages();
  const windowWidth = useWindowWidth();
  const people = useGetData(
    `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`
  );
  if (people.loading) return <Loading />;
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center">
        <SearchField />
        <Title>Popular people</Title>
        {!people.loading && (
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
        )}
        <PagesNavigation
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </>
  );
}
