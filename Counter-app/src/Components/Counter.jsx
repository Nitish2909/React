// import { useState } from "react";
// import styles from "./Counter.module.css";
// const Counter =() =>{
//     const [count, setCount] = useState(0)
//     return <div className={styles.countercontainer}>
//        <p className={styles.para}>you clicked {count}times</p>
//        <button className={styles.btn} onClick={()=>{
//           setCount(count+1)
//        }}  >click me</button>
//     </div>

// }

// export default Counter;


// EXAMPLE USING useReducer hook

import { useReducer } from "react";
import styles from "./Counter.module.css";
function Reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
}
const Counter = () => {
  const [count, dispatch] = useReducer(Reducer, 0);
  return (
    <div className={styles.countercontainer}>
      <h1 className={styles.para}>you clicked {count}times</h1>
      <button
        className={styles.btn}
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
