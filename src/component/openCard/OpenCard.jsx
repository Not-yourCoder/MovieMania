import axios from "axios";
import React from "react";

const OpenCard = async () => {
  const getMovies = {
    method: "GET",
    url: "https://movie-tv-music-search-and-download.p.rapidapi.com/search",
    params: {
      keywords: "Meg 2 The Trench",
      quantity: "40",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "2c293c8850mshc3191b83972276ep1baaf7jsnee0d29c864df",
      "X-RapidAPI-Host": "movie-tv-music-search-and-download.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(getMovies);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <div className="play">
        <button onClick={getMovies}>Click</button>
      </div>
    </>
  );
};

export default OpenCard;
