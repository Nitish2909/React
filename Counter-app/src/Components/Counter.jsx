import { useState } from "react";
import styles from "./Counter.module.css";
const Counter =() =>{
    const [count, setCount] = useState(0)
    return <div className={styles.countercontainer}>
       <p className={styles.para}>you clicked {count}times</p>
       <button className={styles.btn} onClick={()=>{
          setCount(count+1)
       }}  >click me</button>
    </div>

}

export default Counter;