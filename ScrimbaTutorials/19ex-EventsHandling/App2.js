/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
        {/* le metemos un evento onChange a este checkbox */}
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed!")}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItema