import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MovieDetail from "./MovieDetail";
import MovieMain from "./MovieMain";
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MovieMain />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;