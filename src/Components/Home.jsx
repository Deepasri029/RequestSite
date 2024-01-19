import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={"/"}>Bank</Link>
      <Link to={"/branchs"}>.....Branchs</Link>
    </div>
  )
}

export default Home
