import React from 'react'
import ProblemCard from './ProblemCard'
import '../styles/homepage.css'

const HomePage = () => {
  return (
    <div className='home-div'>
      <h1>Currently Pending Problems</h1>
      
      <div className="card-container">
        <ProblemCard/>
        <ProblemCard/>
        <ProblemCard/>
        <ProblemCard/>
      </div>

    </div>
  )
}

export default HomePage
