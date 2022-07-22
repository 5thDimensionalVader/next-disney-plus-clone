import Head from 'next/head';
import { Header } from '../components/Header';
import { getSession, useSession } from 'next-auth/react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Brands from '../components/Brands';


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
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands/>
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