const MovieDetail = ({ movie }) => {
  return (
    <div className="max-w-[1100px] mx-auto p-6">
      <div className="grid grid-cols-[300px_1fr] gap-6">
        {/* 왼쪽 포스터 */}
        <div className="border-4 border-slate-900 bg-sky-900 flex items-center justify-center h-[500px]">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x500?text=No+Image"
            }
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 오른쪽 정보 영역 */}
        <div className="flex flex-col gap-4">
          {/* 제목 + 평점 */}
          <div className="grid grid-cols-[1fr_100px] gap-3">
            <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[70px] text-3xl font-bold px-4 text-center">
              {movie.title}
            </div>
            <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[70px] text-2xl font-semibold">
              {movie.vote_average ? movie.vote_average.toFixed(1) : "-"}
            </div>
          </div>

          {/* 장르 */}
          <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[90px] text-2xl font-semibold px-4 text-center">
            {movie.genres && movie.genres.length > 0 ? movie.genres.map((g) => g.name).join(", ") : "장르 정보 없음"}
          </div>

          {/* 줄거리 */}
          <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[320px] px-8 text-center text-xl leading-relaxed break-keep">
            {movie.overview ? movie.overview : "줄거리 정보가 없습니다."}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
