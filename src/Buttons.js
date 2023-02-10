import './Buttons.css';
import React, { Component,useState } from 'react';  
function Buttons(props) {
  let strings = [
    ["DEL","Clear","(",")"],
    ["π","e","Pow","History"],
    ["Gcd","Lcm","Sin","Cos"],
    ["/","7","8","9"],
    ["*","4","5","6"],
    ["-","1","2","3"],
    ["+","0",".",","],
    ["Ans","Clear History"]
];
  return (
    <div className='button_grid'>
        {
            strings.map(row=>(
                <div className='button_rows'>
                    {row.map(buttons=>
                        buttons === "Clear History"?
                        (<button onClick={() => props.handleClick(buttons)} className='button__enter' >{buttons}</button>)
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
