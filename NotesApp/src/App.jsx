
import React, { useState } from 'react'


const App = () => {
 
const handleSubmit = (e) =>{
  e.preventDefault();
console.log(e);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Name'/>
        <br/>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App
