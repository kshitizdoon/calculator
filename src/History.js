import React from 'react'

function History(props) {
  
    return (
    <div>
        <button onClick = {props.handleClick}>Back</button>
        {props.history.map(string =>(
            <li>{string}</li>
        ))}    
    </div>
  )
}

export default History