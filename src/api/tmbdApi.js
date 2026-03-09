const API_URL = `https://api.themoviedb.org/3/`;

// 공통 옵션
const defaultOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
};

// URL 파라미터를 만들어주는 헬퍼 함수
const buildUrl = (endpoint, queryParams) => {
  // queryParams 객체를 URL 쿼리 문자열로 변환
  const queryString = new URLSearchParams(queryParams).toString();
  // 쿼리 문자열이 있으면 URL에 추가, 없으면 기본 URL 반환
  return queryString ? `${API_URL}${endpoint}?${queryString}` : `${API_URL}${endpoint}`;
};

// 1. 인기 영화 목록 가져오기 (Home용)
export const getPopularMovies = async (queryParams = {}) => {
  const response = await fetch(buildUrl('/movie/popular', queryParams), defaultOptions);
  
  if (!response.ok) throw new Error("인기 영화 목록을 불러오지 못했습니다.");
  return await response.json();
};

// 2. 영화 상세 정보 가져오기 (Detail용)
export const getMovieDetail = async (id, queryParams = {}) => {
  const response = await fetch(buildUrl(`/movie/${id}`, queryParams), defaultOptions);
  
  if (!response.ok) throw new Error("영화 상세 정보를 불러오지 못했습니다.");
  return await response.json();
};