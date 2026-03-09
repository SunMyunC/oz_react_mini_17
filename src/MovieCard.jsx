import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
        <Link
          key={movie.id}
          to={`/details/${movie.id}`}
          className="no-underline text-inherit"
        >
      <div className="w-[200px] bg-white border border-gray-300 overflow-hidden shadow-sm">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-3">
          <h3 className="text-lg font-semibold break-keep">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            평점: {movie.vote_average}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;