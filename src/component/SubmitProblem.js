import React from 'react'
import '../styles/submitproblem.css'

const SubmitProblem = () => {
  return (
    <div className='div'>
      <h1>Submit Problem</h1>
      
      <div className='input-div'>
        <input type="text" placeholder="Issue Title" />
        <textarea type='text' placeholder='Issue Description' />
        <input type='file' />
        <input type='text' placeholder='location' />

        <button>Submit</button>
      </div>
    </div>
  )
}

export default SubmitProblem
