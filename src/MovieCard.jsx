import movieListData from "../data/movieListData.json";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div>
      {movieListData.results.map((movie) => (
        <Link to={`/details`} key={movie.id}>
          <div>
            <img
              src={movie.poster_path}
              alt={movie.original_title}
            />
            <h3>{movie.original_title}</h3>
            <p>{movie.vote_average}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;