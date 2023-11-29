import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./movieCard";
import { Box, Container, Grid } from "@mui/material";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const getMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=a26889dcacb17b48d944c42f9180bd52`
    );
    setMovies(data.results);
    setTotalResults(data.total_results);
  };
  useEffect(() => {
    getMovies();
  }, []);
console.log(movies);



  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular?api_key=a26889dcacb17b48d944c42f9180bd52")
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setMovies(data.results);
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=a26889dcacb17b48d944c42f9180bd52`)
  //   .then(res => {
  //     const movies = res.data;
  //     setMovies(movies.results);
  //   })
  // }, [])

  return (
    <Container>
      <h1 style={{textAlign:'center', marginBottom:'50px'}}>Total movies available : {totalResults}</h1>
      {movies.length > 0 ? (
        <Grid container>
          {movies.map((movie) => (
            <Grid item xs={12} md={4} key={movie.id}>
              <MovieCard {...movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          <h1>{totalResults}</h1>
          <h2>Sorry !! No Movies Found</h2>
        </div>
      )}
    </Container>
  );
}
