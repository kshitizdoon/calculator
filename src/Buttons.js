import './Buttons.css';
import React, { Component,useState } from 'react';  
function Buttons(props) {
  let strings = [
    ["DEL","Clear","(",")"],
    ["/","7","8","9"],
    ["*","4","5","6"],
    ["-","1","2","3"],
    ["+","0",".",","],
    ["Gcd","Lcm","Sin","Cos"],
    ["Ans","Show History"]
  ];
  return (
    <div className='button_grid'>
        {
            strings.map(row=>(
                <div className='button_rows'>
                    {row.map(buttons=>
                        buttons === "Show History"?
                        (<button className='button__enter' >{buttons}</button>)
                        :
                        (<button onClick={() => props.handleClick(buttons)}   className='button'>{buttons}</button>)
                    )
                }
                </div>
            ))
        }
    </div>
  );
}

export default Buttons;
