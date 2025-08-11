import ButtonContainer from "./Components/ButtonContainer"
import Display from "./Components/Display"
import styles from "./App.module.css"
import { useState } from "react"
function App() {
  let [calval,setCalval] = useState("")

  const onButtonClick= (buttonText) =>{

    if(buttonText==="C")
    {
      setCalval("")
    }
    else if(buttonText==="=")
    {
          const result=eval(calval)
         setCalval(result);
    }
    else{
      const newDisplayValue=calval + buttonText;
      setCalval(newDisplayValue);
    }
  }

  return <div classNameName={styles.calculator}>
    <Display displayValue={calval}></Display>
  <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
  
  </div>
  
}

export default App
