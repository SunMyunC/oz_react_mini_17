const API_URL = `https://api.themoviedb.org/3/`

// 공통 옵션
const defaultOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}

// URL 파라미터를 만들어주는 헬퍼 함수
const buildUrl = (endpoint, queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString()
  return queryString ? `${API_URL}${endpoint}?${queryString}` : `${API_URL}${endpoint}`
}

// 1. 인기 영화 목록 가져오기 (Home용)
export const getPopularMovies = async (queryParams = {}) => {
  const response = await fetch(buildUrl("/movie/popular", { language: "ko-KR", ...queryParams }), defaultOptions)

  if (!response.ok) throw new Error("인기 영화 목록을 불러오지 못했습니다.")

  const data = await response.json()

  return {
    ...data,
    results: data.results.filter((movie) => !movie.adult),
  }
}

// 2. 영화 상세 정보 가져오기 (Detail용)
export const getMovieDetail = async (id, queryParams = {}) => {
  const response = await fetch(buildUrl(`/movie/${id}`, { language: "ko-KR", ...queryParams }), defaultOptions)

  if (!response.ok) throw new Error("영화 상세 정보를 불러오지 못했습니다.")
  return await response.json()
}

// 3. 영화 검색 결과 가져오기 (Search용)
export const getMovieSearch = async (keyword, queryParams = {}) => {
  const response = await fetch(
    buildUrl(`/search/movie`, { language: "ko-KR", query: keyword, adult: false, ...queryParams }),
    defaultOptions,
  )

  if (!response.ok) throw new Error("영화 검색 결과를 불러오지 못했습니다.")

  const data = await response.json()

  return {
    ...data,
    results: (data.results || []).filter((movie) => !movie.adult),
  }
}
