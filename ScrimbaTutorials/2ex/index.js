// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

//importamos react para que se reconozca el JSX (html)
import React from "react"
import ReactDOM from "react-dom"

//JSX
ReactDOM.render(
    <div>
        <h1>Exercise 2</h1>
        
        <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        </ul>
    </div>
    ,
    document.getElementById("root")
  )