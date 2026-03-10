import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

const NavBar = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect에서 setState 하지 말고 초기값으로 바로 설정
  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get("query") || ""
  );

  const debouncedSearch = useDebounce(searchTerm, 500);

  // debounce된 값이 변경되면 URL searchParams 업데이트
  useEffect(() => {
    if (debouncedSearch.trim()) {
      setSearchParams({ query: debouncedSearch });
    } else {
      setSearchParams({});
    }
  }, [debouncedSearch, setSearchParams]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between p-4">
      <h1 className="text-xl font-bold">Movie</h1>

      <input
        type="text"
        placeholder="영화 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-3 py-2 w-64"
      />
    </nav>
  );
};

export default NavBar;