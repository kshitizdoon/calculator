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
  const [showhist, setShowhist] = useState(0);
  
  function ChangeShowhist(){
    setShowhist(prevShowhist=>(!prevShowhist))
  }
  function ChangCalc(button){
    if(button==="Clear"){
        setCalc(prevCalc => (""))
        setRes(prevRes => (""))
    }
    else if(button==="DEL"){
      setCalc(prevCalc => (prevCalc.slice(0, prevCalc.length-1)))
    }
    else if(button==="Ans"){
      let result = Evaluate(calc);
      setRes(prevRes => (result))

      setHist(prevHist => ([...prevHist, calc + " = " + result]))
    }
    else if(button === "History"){
      setShowhist(prevShowhist => (!prevShowhist))
    }
    else if(button === "Clear History"){
      setHist(prevHist => ([""]))
    }
    else{
      setCalc(prevCalc => (prevCalc+button))
    }
  }
  return (
      (showhist == 0) ? (
      <div className='container'>
        <div className='header'>
          <div className='title'>Scientific Calculator</div>
        </div>
        <div className='screen'>
          <div className='screen__calculation'>{calc}</div>
          <div className='screen__results'>{res}</div>
        </div>
        <div className='buttons'>
          <Buttons handleClick = {ChangCalc} state = {calc}/>
        </div>
      </div>
      ):(
        <History history = {hist} handleClick = {ChangeShowhist} />
      )
  );
}

export default App;
