import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  })
  return (
    <div>
      <h1>I have Renderd {count} times</h1>
    </div>
  )
}

export default App
