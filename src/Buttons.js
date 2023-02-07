// import './Buttons.css';
import { useTable } from 'react-table';
import ReactTable from 'react-table';
import React, { Component } from 'react';  
// import "react-table/react-table.css";  

function Buttons() {
  let strings = [
    ["<",">","DEL","Clr"],
    ["M","M+","MR","MC"],
    ["/","7","8","9"],
    ["X","4","5","6"],
    ["-","1","2","3"],
    ["+","0",".","(-)"],
    ["Ans","Enter"]
  ];
  return (
    <div>
        {
            strings.map(row=>(
                <div>
                    {row.map(buttons=>(
                        <button>{buttons}</button>
                    ))}
                </div>
            ))
        }
    </div>
  );
}

export default Buttons;
