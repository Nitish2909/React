import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

    const users = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1661692590501-a287c95ed55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8',
      intro:'',
      tag: 'Satisfied' 
    },
     {
      img : 'https://plus.unsplash.com/premium_photo-1683121006444-ce4537724d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8',
      intro:'',
      tag: 'UnderServed' 
    },
     {
      img : 'https://plus.unsplash.com/premium_photo-1661337227407-0015275e88c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgwfHx8ZW58MHx8fHx8',
      intro:'',
      tag: 'Underbanked' 
    },
     {
      img : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag: 'Working' 
    },

  ]
  return (
    <div>
      <Section1 users= {users}/>
    </div>
  )
}

export default App
