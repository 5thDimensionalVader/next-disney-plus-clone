import React from 'react';
import Image from 'next/image';
import tw from "tailwind-styled-components";
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

export const Header = () => {
  /* Destructuring the data from the useSession hook. */
  const { data: session } = useSession();
   const router = useRouter();

  return (
    <>
      {/* Navbar Container */}
      <NavContainer>
        <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer" onClick={() => router.push("/")} />

        {session && (
          <LinkContainer>
            <a className="header-link group">
              <HomeIcon className="h-4" />
              <span className="span">Home</span>
            </a>

            <a className="header-link group">
              <SearchIcon className="h-4" />
              <span className="span">Search</span>
            </a>

            <a className="header-link group">
              <PlusIcon className="h-4" />
              <span className="span">Watchlist</span>
            </a>

            <a className="header-link group">
              <StarIcon className="h-4" />
              <span className="span">Originals</span>
            </a>
          </LinkContainer>
        )}

        {!session ? (
          <LoginButton onClick={signIn}>
            Login
          </LoginButton>
        ) : (
          <User onClick={signOut}>
            <img src={session.user?.image} alt="img" className="h-12 w-12 rounded-full inline-flex items-baseline self-center" />
            <span className="hidden md:block">{session.user.name}</span>
          </User>
        )}
      </NavContainer>
    </>
  )
}



const NavContainer = tw.div`
  sticky
  bg-[#040714]
  top-0
  z-[1000]
  flex
  items-center
  justify-between
  px-10
  h-[72px]
  md:px-12
`;

const LinkContainer = tw.div`
  hidden
  ml-10
  md:flex items-center space-x-6
`;

const LoginButton = tw.button`
  uppercase
  border
  text-sm
  px-2
  py-1.5
  rounded
  font-medium
  tracking-wide
  hover:bg-white
  hover:text-black transition duration-200
`;

const User = tw.h3`
  uppercase
  text-sm
  font-medium
  cursor-pointer
  flex
  items-center
  gap-2
`;