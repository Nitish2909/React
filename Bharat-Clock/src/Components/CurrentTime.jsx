import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () =>{
   const[time,setTime] =useState(new Date());

   useEffect(()=>{
   const intervalId = setInterval(()=>{
    setTime(new Date())
   });

   return ()=>{
    clearInterval(intervalId);
   }
   },[])
    
    return <h1>Current Date and Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}

    </h1>
}
export default CurrentTime;