import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import { useSearchParams, Link } from "react-router-dom"

const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // useEffect에서 setState 하지 말고 초기값으로 바로 설정
  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("query") || "")

  const debouncedSearch = useDebounce(searchTerm, 500)

  // debounce된 값이 변경되면 URL searchParams 업데이트
  useEffect(() => {
    if (debouncedSearch.trim()) {
      setSearchParams({ query: debouncedSearch }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }, [debouncedSearch, setSearchParams])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      {/* 전체 컨테이너 */}
      <div className="max-w-screen-2xl mx-auto flex items-center gap-4 px-4 md:px-8 py-4">
        {/* 로고 */}
        <Link to="/">
          <h1 className="text-purple-600 text-xl md:text-2xl font-extrabold whitespace-nowrap">MOVIE</h1>
        </Link>

        {/* 검색창 */}
        <input
          type="text"
          placeholder="영화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            flex-1
            min-w-[120px]
            bg-zinc-900
            text-white
            border border-zinc-700
            rounded-md
            px-4 py-2
            outline-none
            focus:border-white
            placeholder:text-zinc-400
          "
        />

        {/* 로그인 버튼 */}
        <Link to="/login">
          <button className="whitespace-nowrap bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white text-sm md:text-base">
            로그인
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
