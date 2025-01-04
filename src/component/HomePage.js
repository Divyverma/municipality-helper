import React from 'react'
import ProblemCard from './ProblemCard'

const HomePage = () => {
  
  return (
    <div className='p-4 md:p-8 h-screen flex flex-col items-center'>
      <h1 className="text-4xl font-bold align py-4" >Currently Pending Problems</h1>
      
      <div className="border p-3 w-full h-full overflow-scroll grid md:grid-cols-4 ">
        <ProblemCard/>
      </div>

    </div>
  )
}

export default HomePage
