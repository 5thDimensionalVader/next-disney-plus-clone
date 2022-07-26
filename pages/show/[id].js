import React from 'react'

const Show = ({ result }) => {
  return (
    <div>Show</div>
  )
}

export default Show;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then((res) => res.json());

  return {
    props: {
      result: request,
    }
  }
}