import { useEffect, useState } from "react";
import MovieCard from "../movie/MovieCard";
import { getPopularMovies, getMovieSearch } from "../Api/tmbdApi";
import { useSearchParams } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([]);
const [searchParams] = useSearchParams();

  // URL에서 query 값 가져오기
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data;

        // 검색어가 있으면 검색 API 호출
        if (query.trim()) {
          console.log("검색 API 호출");
          data = await getMovieSearch(query);
        } else {
          // 검색어가 없으면 인기 영화 목록 호출
          console.log("인기 영화 목록 호출");
          data = await getPopularMovies(); 
        }

        console.log("받아온 데이터:", data);
        console.log("results:", data.results);
        
        setMovies(data.results || []);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {movies
        .filter((movie) => !movie.adult)
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;