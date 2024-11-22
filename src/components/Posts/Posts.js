import React, { useState, useEffect } from "react";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";
import "./Posts.css";
import axios from "../../axios";

function Posts(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState(null);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Play features
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const videoplayer = (movieId) => {
    console.log(movieId);
    axios
      .get(`movie/${movieId}/videos?language=en-US&api_key=${API_KEY}`)
      .then((response) => {
        // console.log(response.data.results)
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert("No videos found");
          console.log("No videos found");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleclick = () => {
    setUrlId(null);
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="image-post">
        {movies.map((movie, index) => (
          <div key={index}>
            <img
              onClick={() => videoplayer(movie.id)}
              className={props.isSmall ? "smallPost" : "posts"}
              src={`${imageUrl + movie.backdrop_path}`}
              alt="posts-row"
            />
            {props.isSmall ? (
              <h5>Movie : {movie.title}</h5>
            ) : (
              <h4>Movie : {movie.name}</h4>
            )}
          </div>
        ))}
      </div>
      {urlId && (
        <div className="video-popup">
          <div className="close-button">
            <button onClick={handleclick}>×</button>
          </div>
          <Youtube videoId={urlId.key} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Posts;
