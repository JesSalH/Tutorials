
import React from "react"


function Joke(props){

    return(
        <div>
            {/* ojo cuestion solo aparecera si props.question existe (es true), si no se oculta con display none */}
            <p> style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            {/* aqui lo pinta de un color si no nos han pasado una punhline */}
            <h3 style={{color: !props.punchLine && "#888888"}}>Answer: {props.punchLine}</h3>
        </div>
    )
}


export default Joke