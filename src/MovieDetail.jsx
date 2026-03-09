import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  // 영화 상세 정보 저장
  const [movie, setMovie] = useState(null);

  // 로딩 상태 저장
  const [loading, setLoading] = useState(true);

  // 에러 메시지 저장
  const [error, setError] = useState(null);

  useEffect(() => {
    // 영화 상세 정보를 가져오는 비동기 함수
    const fetchMovieDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko-KR`
        );

        // 응답 실패 시 에러 처리
        if (!response.ok) {
          throw new Error("영화 상세 정보를 불러오지 못했습니다.");
        }

        const data = await response.json();

        // 받아온 영화 상세 데이터 저장
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // id가 있을 때만 호출
    if (id) {
      fetchMovieDetail();
    }
  }, [id]);

  // 로딩 중 화면
  if (loading) {
    return <div className="p-6 text-center">로딩 중...</div>;
  }

  // 에러 발생 시 화면
  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  // movie 데이터가 없을 경우
  if (!movie) {
    return <div className="p-6 text-center">영화 정보가 없습니다.</div>;
  }

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
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map((g) => g.name).join(", ")
              : "장르 정보 없음"}
          </div>

          {/* 줄거리 */}
          <div className="border-4 border-slate-900 bg-sky-900 text-white flex items-center justify-center h-[320px] px-8 text-center text-xl leading-relaxed break-keep">
            {movie.overview ? movie.overview : "줄거리 정보가 없습니다."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;