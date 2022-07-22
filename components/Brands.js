import Image from 'next/image';
import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { imgDisney, imgPixar, imgMarvel, imgStarWars, imgNatGeo } from '../public';

const Brands = () => {
  return (
    <>
      <BrandContainer>
        <div className="brand group">
          <Image src={imgDisney} layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="brand group">
          <Image src={imgPixar} layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src={imgMarvel} layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image src={imgStarWars} layout="fill" objectFit="cover" />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="brand group">
          <Image
            src={imgNatGeo}
            layout="fill"
            objectFit="cover"
          />
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </div>
      </BrandContainer>
    </>
  )
}

export default Brands;

const BrandContainer = tw.div`
  flex
  flex-col
  md:flex-row
  items-center
  justify-center
  mt-10
  px-8
  gap-6
  mx-auto
  max-w-[1400px]
`;