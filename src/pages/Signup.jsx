import { useState } from "react"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.")
      return
    }

    console.log({
      username,
      email,
      password,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        onSubmit={handleSignup}
        className="
        w-full 
        max-w-md
        sm:max-w-lg
        lg:max-w-xl
        bg-zinc-900
        text-white
        p-8
        sm:p-10
        rounded-xl
        shadow-2xl
        flex flex-col
        gap-5
        "
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">회원가입</h2>

        {/* 아이디 */}
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 sm:p-4 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-purple-500"
        />

        {/* 이메일 */}
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 sm:p-4 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-purple-500"
        />

        {/* 비밀번호 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 sm:p-4 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-purple-500"
        />

        {/* 비밀번호 확인 */}
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-3 sm:p-4 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-purple-500"
        />

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="
          mt-3
          bg-purple-600
          hover:bg-purple-700
          transition
          py-3
          sm:py-4
          rounded-lg
          font-semibold
          text-lg
          "
        >
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Signup
