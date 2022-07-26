import Head from 'next/head';
import React from 'react';
import { Header } from '../../components/Header';
import { useSession, getSession } from 'next-auth/react';
import Hero from '../../components/Hero';
import { useRouter } from 'next/router';

const Movie = ({ result }) => {
  const { data: session } = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{result?.title || result?.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? <Hero/> : (
        <section>

        </section>
      )}
    </div>
  )
}

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession();

  const { id } = context.params;
  const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then((res) => res.json());

  return {
    props: {
      result: request,
      session,
    }
  }
}