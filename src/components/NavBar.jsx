import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import { useSearchParams, Link } from "react-router-dom"

const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get("query") || "")

  const debouncedSearch = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearch.trim()) {
      setSearchParams({ query: debouncedSearch }, { replace: true })
    } else {
      setSearchParams({}, { replace: true })
    }
  }, [debouncedSearch, setSearchParams])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto flex items-center gap-3 px-4 md:px-8 lg:px-12 py-4">
        {/* 로고 */}
        <Link to="/" className="shrink-0">
          <h1 className="text-purple-600 text-xl md:text-2xl font-extrabold tracking-wide whitespace-nowrap">MOVIE</h1>
        </Link>

        {/* 검색창 */}
        <input
          type="text"
          placeholder="영화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-[100px] bg-zinc-900 text-white border border-zinc-700 rounded-md px-4 py-2 outline-none focus:border-white placeholder:text-zinc-400"
        />

        {/* 오른쪽 버튼 영역 */}
        <div className="flex items-center gap-2 shrink-0">
          <Link to="/login">
            <button className="whitespace-nowrap bg-zinc-800 hover:bg-zinc-700 text-white px-3 md:px-4 py-2 rounded-md text-sm md:text-base transition">
              로그인
            </button>
          </Link>

          <Link to="/signup">
            <button className="whitespace-nowrap bg-purple-600 hover:bg-purple-700 text-white px-3 md:px-4 py-2 rounded-md text-sm md:text-base transition">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
