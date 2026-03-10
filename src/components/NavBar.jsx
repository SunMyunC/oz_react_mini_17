import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import { useSearchParams } from "react-router-dom"

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
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 md:px-8 lg:px-12 py-4">
        <h1 className="text-purple-600 text-2xl md:text-3xl font-extrabold tracking-wide">MOVIE</h1>
        <input
          type="text"
          placeholder="영화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-72 lg:w-80 bg-zinc-900 text-white border border-zinc-700 rounded-md px-4 py-2 outline-none focus:border-white placeholder:text-zinc-400"
        />
      </div>
    </nav>
  )
}

export default NavBar
