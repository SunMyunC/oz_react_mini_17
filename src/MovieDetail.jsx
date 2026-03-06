import movieDetailData from "../data/movieDetailData.json";

const MovieDetail = () => {
  const {
    title,
    poster_path,
    vote_average,
    genres,
    overview,
  } = movieDetailData;

  return (
    <div className="max-w-[1100px] mx-auto p-6">
      <div className="grid grid-cols-[300px_1fr] gap-6">
        {/* 왼쪽 포스터 */}
        <div className="border-4 border-slate-900 bg-sky-900 flex items-center justify-center h-[500px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 오른쪽 정보 영역 */}
        <div className="flex flex-col gap-4">
          {/* 제목 + 평점 */}
          <div className="grid grid-cols-[1fr_100px] gap-3">
            <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[70px] text-3xl font-bold">
              {title}
            </div>
            <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[70px] text-2xl font-semibold">
              {vote_average}
            </div>
          </div>

          {/* 장르 */}
          <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[90px] text-2xl font-semibold px-4 text-center">
            {genres.map((g) => g.name).join(", ")}
          </div>

          {/* 줄거리 */}
          <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[320px] px-8 text-center text-xl leading-relaxed break-keep">
            {overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;