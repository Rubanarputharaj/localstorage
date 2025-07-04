import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("isLogin")
navigate('/')
    }
  return (
    <div>
      <h1>welcome to home page</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Home
