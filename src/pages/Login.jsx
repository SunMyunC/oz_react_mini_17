import { useState } from "react"

const Login = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("로그인 시도")
    console.log("id:", id)
    console.log("password:", password)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg bg-gray-900 rounded-xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col gap-5 sm:gap-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Login</h1>

        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full rounded-md px-4 py-3 sm:py-4 text-white text-base sm:text-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md px-4 py-3 sm:py-4 text-white text-base sm:text-lg"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-md py-3 sm:py-4 text-base sm:text-lg font-semibold"
        >
          로그인
        </button>
      </form>
    </div>
  )
}

export default Login
