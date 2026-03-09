import { useEffect, useState } from "react";
import MovieCard from "../movie/MovieCard";
import { getPopularMovies } from "../Api/tmbdApi";

const Home = () => {

  const [movies, setMovies] = useState([]);

   useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies({ language: "ko-KR"});
        
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchMovies();
  }, []);
console.log(import.meta.env.VITE_TMDB_TOKEN);

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

export default Home;