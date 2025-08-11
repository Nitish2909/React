// import { useState } from "react";
// import styles from "./Counter.module.css";
// const Counter =() =>{
//     const [count, setCount] = useState(0)
//     return <div classNameName={styles.countercontainer}>
//        <p classNameName={styles.para}>you clicked {count}times</p>
//        <button classNameName={styles.btn} onClick={()=>{
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
    <div classNameName={styles.countercontainer}>
      <h1 classNameName={styles.para}>you clicked {count}times</h1>
      <button
        classNameName={styles.btn}
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        classNameName={styles.btn}
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
