import movieListData from "../data/movieListData.json";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {movieListData.results.map((movie) => (
        <Link
          to={`/details`}
          key={movie.id}
          className="no-underline text-inherit"
        >
          <div className="w-[200px] p-4 bg-white rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-200">
            <img
              src={movie.poster_path}
              alt={movie.original_title}
              className="w-full rounded-md"
            />
            <h3 className="text-sm font-semibold mt-3">
              {movie.original_title}
            </h3>
            <p className="text-gray-500 text-sm">
              {movie.vote_average}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;