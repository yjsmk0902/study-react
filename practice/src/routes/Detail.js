import { useParams } from "react-router-dom";

import { useEffect } from "react";

function Detail() {
  const id = useParams();
  const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const getMovies = async () => {
    const json = await (await fetch(url)).json();
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  });
  return <div>Detail</div>;
}

export default Detail;
