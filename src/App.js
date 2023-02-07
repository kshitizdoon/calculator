import './App.css';
import Pic from './assets/calc_img.png';
import Buttons from "./Buttons.js"
function App() {
  return (
    <div>
      <img src = {Pic} className="calc_img" width={250} height={250}></img>
      <div className='container'>
        <div className='header'>
          <h1>Scientific Calculator</h1>
        </div>
        <div className='screen'>
          <div className='calculation_screen'>
            2+4
          </div>
          <div className='results_screen'>
            =6
          </div>
        </div>
        <div className='buttons'>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
