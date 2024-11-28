import React from 'react'
import '../styles/problemcard.css'
import { FaLocationDot } from "react-icons/fa6";

const ProblemCard = () => {
  return (
    <div className='card-div'>
      <h3>Issue tittle</h3>
      <img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Damaged_dangerous_street_light_pole_20180524.jpg' alt='issue-image' />
      <p>Issue description all about image what is.....</p>
      <h4><FaLocationDot/> Location</h4>
    </div>
  )
}

export default ProblemCard
