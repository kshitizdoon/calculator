import './App.css';
// import Pic from './assets/calc_img.png';
import Buttons from "./Buttons.js"
import {useState} from 'react'
import Evaluate from "./Evaluate.js"

function App() {
  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");
  
  function ChangCalc(button){
    if(button==="Clear"){
        setCalc(
          prevCalc => ("")
        )
        setRes(
          prevRes => ("")
        )

    }
    else if(button==="DEL"){
      setCalc(
        prevCalc => (prevCalc.slice(0, prevCalc.length-1))
      )
    }
    else if(button==="Ans"){
      setRes(
        prevRes => (Evaluate(calc))
      )
    }
    else{
      setCalc(
        prevCalc => (
          prevCalc+button
        )
      )
    }
  }
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <h3>Scientific Calculator</h3>
        </div>
        <div className='screen'>
          <div className='screen__calculation'>
            {calc}
          </div>
          <div className='screen__results'>
            {res}
          </div>
        </div>
        <div className='buttons'>
          <Buttons handleClick = {ChangCalc} state = {calc}/>
        </div>
      </div>
    </div>
  );
}

export default App;
