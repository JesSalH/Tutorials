/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"

import Product from "./Product.js"

function App() {

    //aqui tenemos que tranformar el array de products

   const arrayProductCompoments = productsData.map(product =>{

       return(
            // Esta es la version donde el componente product no tiene objeto (solo propiedades)       
           /*  <Product
                //ojo que key lo hemos anyadido nosotros 
                key = {product.id}

                name = {product.name}
                price = {product.price}
                description = {product.description}
            /> */



            //esta es la version donde un componente Product si que tiene un objeto product
            <Product

                key={product.id}
                //Ojo que aqui esta igualando el objeto prod que tiene cada componente product
                // con el elemento product del array de productos 
                //(porque ambos tienen atributos con el mismo nombre??)
                prod ={product}

            />

        

        )
    })



    return (
        <div>
            {arrayProductCompoments}
        </div>
    )
}

export default App