import React from "react"


function Conditional(props) {

    //version clasica de un condicional
    // if(props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //     return (
    //         <h1>Some cool stuff about conditional rendering</h1>
    //     )
    // }

    //lo mismo pero version ternaria
    return (
        <div>
            {/* ojo que va entre llaves */}
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
        </div>
    )
    
}

export default Conditional