import Head from 'next/head';
import { Header } from '../components/Header';
import { getSession, useSession } from 'next-auth/react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';


export default function Home() {
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
        <main>
          <Slider />
        </main>
      )}
    </>
  )
}

export async function getServerSideProps() {
  const session = await getSession();
  return {
    props: {
      session,
    }
  }
}