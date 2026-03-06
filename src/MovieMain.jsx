import movieListData from "../data/movieListData.json";
import MovieCard from "./MovieCard";

const MovieMain = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {movieListData.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieMain;