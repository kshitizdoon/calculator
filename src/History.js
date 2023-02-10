import React from 'react'

function History(props) {
  
    return (
    <div>
        <button onClick = {props.handleClick}>Back</button>
        
        {props.history}    
    </div>
  )
}

export default History