import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetail } from "../Api/tmbdApi"
import MovieDetail from "../movie/MovieDetail"

const Detail = () => {
  const { id } = useParams()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await getMovieDetail(id)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchMovieDetail()
    }
  }, [id])

  if (loading) {
    return <div className="p-6 text-center">로딩 중...</div>
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>
  }

  if (!movie) {
    return <div className="p-6 text-center">영화 정보가 없습니다.</div>
  }

  return <MovieDetail movie={movie} />
}

export default Detail
