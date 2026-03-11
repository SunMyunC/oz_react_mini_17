import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
