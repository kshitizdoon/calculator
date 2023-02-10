import './App.css';
// import Pic from './assets/calc_img.png';
import Buttons from "./Buttons.js"
import {useState} from 'react'
import Evaluate from "./Evaluate.js"
import History from "./History.js"
function App() {
  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");
  const [hist, setHist] = useState([""]);
  
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
      setHist(
        prevHist => (
          [...prevHist,
          calc + " = " + res]
          // prevHist.push(calc + " = " + res)
        )
      )
    }
    else if(button === "Show History"){
      <History history = {hist}/>
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
