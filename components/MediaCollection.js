import React from 'react';
import MediaThumbnail from './MediaThumbnail';
import tw from 'tailwind-styled-components/dist/tailwind';

const MediaCollection = ({ results, title, mediaType }) => {

  return (
    <>
    <Container>
      <h2 className="font-semibold">{title}</h2>
      <Collection>
        {
          results.map((result) => (
            <MediaThumbnail result={result} mediaType={mediaType} key={result.id}/>
          ))
        }
      </Collection>
    </Container>
    </>
  )
}

export default MediaCollection;

const Container = tw.div`
  relative 
  flex 
  flex-col 
  space-y-2 
  my-10 
  px-8 
  max-w-[1400px] 
  mx-auto
`;
const Collection = tw.div`
  flex
  flex-row
  space-x-6 
  overflow-y-hidden
  overscroll-x-scroll
  scrollbar-hide
  p-2 
  -m-2
`;