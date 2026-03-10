import { useEffect, useState } from "react"
import MovieCard from "../movie/MovieCard"
import { getPopularMovies, getMovieSearch } from "../Api/tmbdApi"
import { useSearchParams } from "react-router-dom"

const Home = () => {
  const [movies, setMovies] = useState([])
  const [searchParams] = useSearchParams()

  // URL에서 query 값 가져오기
  const query = searchParams.get("query") || ""

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let data

        // 검색어가 있으면 검색 API 호출
        if (query.trim()) {
          console.log("검색 API 호출")
          data = await getMovieSearch(query)
        } else {
          // 검색어가 없으면 인기 영화 목록 호출
          console.log("인기 영화 목록 호출")
          data = await getPopularMovies()
        }

        const filteredMovies = (data.results || []).filter((movie) => !movie.adult)

        setMovies(filteredMovies)
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error)
      }
    }
    fetchMovies()
  }, [query])

  return (
    <div className="w-full min-h-screen bg-black pt-20">
      <section className="max-w-screen-2xl mx-auto px-6 py-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
