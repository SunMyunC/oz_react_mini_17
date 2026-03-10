import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.id}`} className="block group">
      <div className="relative w-full overflow-hidden rounded-lg bg-zinc-900 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[380px] md:h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>

        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-white text-base md:text-lg font-bold break-keep line-clamp-2">{movie.title}</h3>
          <p className="text-zinc-300 text-sm mt-2">
            평점 <span className="text-white font-semibold">{movie.vote_average}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
