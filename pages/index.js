import Head from 'next/head';
import { Header } from '../components/Header';
import { getSession, useSession } from 'next-auth/react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Brands from '../components/Brands';
import tw from 'tailwind-styled-components/dist/tailwind';
import MediaCollection from '../components/MediaCollection';


export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Disney+ Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <Main>
          <Slider />
          <Brands />
          <MediaCollection results={popularMovies} title="Popular Movies" mediaType="movie"/>
          <MediaCollection results={popularShows} title="Popular Shows" mediaType="show"/>
          <MediaCollection results={top_ratedMovies} title="Top Rated Movies" mediaType="movie"/>
          <MediaCollection results={top_ratedShows} title="Top Rated Shows" mediaType="show"/>
        </Main>
      )}
    </>
  )
}

export async function getServerSideProps() {
  const session = await getSession();
  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  console.log(popularMovies);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    }
  }
}

// ui components with tailwind styled components
const Main = tw.main`
relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]
`;