import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            {/* aqui ponemos una funcion directamente con una arrow function */}
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            {/* aqui llamamos a la funcion */}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
