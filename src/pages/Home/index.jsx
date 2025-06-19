import Header from "../../components/Header";
import SearchField from "../../components/SearchField/index";
import Title from "../../components/Title";
import Card from "../../components/Card";
import useGetData from "../../hooks/useGetData";
import Loading from "../../components/Loading";
import Swiper from "../../components/Swiper";
import Grid from "../../components/Grid";
import useWindowWidth from "../../hooks/useWindowWidth";

const discoverMoviesURL = "https://api.themoviedb.org/3/discover/movie";
const topMoviesURL = "https://api.themoviedb.org/3/movie/top_rated";
const upcomingMoviesURL = "https://api.themoviedb.org/3/movie/upcoming";
export default function Home() {
  const discoverMovies = useGetData(discoverMoviesURL);
  const topMovies = useGetData(topMoviesURL);
  const upcomingMovies = useGetData(upcomingMoviesURL);
  const windowWidth = useWindowWidth();
  if (discoverMovies.loading || topMovies.loading || upcomingMovies.loading)
    return <Loading />;
  return (
    <>
      <Header />
      <div className="flex flex-col">
        {!discoverMovies.loading &&
          !topMovies.loading &&
          !upcomingMovies.loading && (
            <>
              <SearchField />
              <Title>Discover</Title>
              {windowWidth < 1024 ? (
                <Swiper listSize={discoverMovies.dataResults.length}>
                  {discoverMovies.dataResults.map((movie) => (
                    <Card
                      title={movie.title}
                      key={movie.id}
                      id={movie.id}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page="movie"
                    />
                  ))}
                </Swiper>
              ) : (
                <Grid>
                  {discoverMovies.dataResults.map((movie) => (
                    <Card
                      title={movie.title}
                      key={movie.id}
                      id={movie.id}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page="movie"
                    />
                  ))}
                </Grid>
              )}
              <Title>Top Rated</Title>

              {windowWidth < 1024 ? (
                <Swiper listSize={topMovies.dataResults.length}>
                  {topMovies.dataResults.map((movie) => (
                    <Card
                      title={movie.title}
                      key={movie.id}
                      id={movie.id}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page="movie"
                    />
                  ))}
                </Swiper>
              ) : (
                <Grid>
                  {topMovies.dataResults.map((movie) => (
                    <Card
                      title={movie.title}
                      key={movie.id}
                      id={movie.id}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page="movie"
                    />
                  ))}
                </Grid>
              )}
              <Title>Upcoming</Title>
              {windowWidth < 1024 ? (
                <Swiper listSize={upcomingMovies.dataResults.length}>
                  {upcomingMovies.dataResults.map((movie) => (
                    <Card
                      title={movie.title}
                      key={movie.id}
                      id={movie.id}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page="movie"
                    />
                  ))}
                </Swiper>
              ) : (
                <Grid>
                  {upcomingMovies.dataResults.map((movie) => (
                    <Card
                      title={movie.title}
                      key={movie.id}
                      id={movie.id}
                      poster_path={movie.poster_path}
                      vote_average={movie.vote_average}
                      page="movie"
                    />
                  ))}
                </Grid>
              )}
            </>
          )}
      </div>
    </>
  );
}
