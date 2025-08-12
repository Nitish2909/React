
import './App.css'
import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import CurrentTime from './Components/CurrentTime'

function App() {
  return (
    <center>
    <div className='container'>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    </div>
    </center>
  
  )
}

export default App
