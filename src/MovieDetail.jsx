import movieDetailData from "../data/movieDetailData.json";

const MovieDetail = () => {
  const {
    backdrop_path,
    title,
    poster_path,
    vote_average,
    genres,
    overview,
  } = movieDetailData;

  return (
    <div>
      <img src={backdrop_path} alt={title} />
      <h1>{title}</h1>
      <img src={poster_path} alt={title} />
      <p>{vote_average}</p>

      {/* ✅ genres 출력 에러 방지 */}
      <p>{genres.map((g) => g.name).join(", ")}</p>

      <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;