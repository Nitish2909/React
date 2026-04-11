
import React, { useState } from 'react'


const App = () => {
  const [count, setcount] = useState(0)

  const counter = ()=>{
    setcount(count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={counter}>Increase++</button>
       <button onClick={()=> setcount(count-1)}>Decrease--</button>
    </div>
  )
}

export default App
