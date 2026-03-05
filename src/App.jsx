import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MovieCard />} />
        <Route path="/details" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;