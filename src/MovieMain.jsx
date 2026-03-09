import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieMain = () => {

  const [movies, setMovies] = useState([]);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ${import.meta.env.VITE_TMDB_API_KEY'
  }
};

   useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=ko-KR`, options
        );

        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {movies
        .filter((movie) => !movie.adult)
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieMain;