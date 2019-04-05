
import React from "react"

function Product(props){

    return(
        <div>
            <p>Name: {props.prod.name} </p>
            <p>Price: {props.prod.price} </p>
            <p>Description: {props.prod.description} </p>
        </div>
    )
}


export default Product