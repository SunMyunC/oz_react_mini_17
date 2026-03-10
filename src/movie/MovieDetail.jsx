const MovieDetail = ({ movie }) => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 items-start">
          {/* 왼쪽 포스터 */}
          <div className="w-full max-w-[320px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-2xl">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x500?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 오른쪽 정보 영역 */}
          <div className="flex flex-col gap-6">
            {/* 제목 + 평점 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-800 pb-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">{movie.title}</h1>

              <div className="inline-flex items-center justify-center rounded-full bg-purple-600 px-5 py-2 text-lg md:text-xl font-semibold text-white w-fit">
                ★ {movie.vote_average ? movie.vote_average.toFixed(1) : "-"}
              </div>
            </div>

            {/* 장르 */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-300 mb-3">장르</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres && movie.genres.length > 0 ? (
                  movie.genres.map((g) => (
                    <span key={g.id} className="px-4 py-2 rounded-full bg-zinc-800 text-sm md:text-base text-white">
                      {g.name}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">장르 정보 없음</span>
                )}
              </div>
            </div>

            {/* 줄거리 */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-300 mb-3">줄거리</h2>
              <div className="bg-zinc-900 rounded-xl p-5 md:p-6 text-base md:text-lg leading-relaxed text-gray-200 break-keep">
                {movie.overview ? movie.overview : "줄거리 정보가 없습니다."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
