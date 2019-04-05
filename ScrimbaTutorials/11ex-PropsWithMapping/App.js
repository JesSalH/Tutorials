import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

 
function MyApp() {


    // esto es un ejemplo de como hacer un map de un array
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(function(num) {
        return num * 2
    })
    console.log(doubled)
    //-----------------------------------------------------


    
    //Ahora hacemos lo mismo con el array de jokes que hemos importado (jokesData)
        //1.- lo mapeamos y para cada elemento del array (joke)...
   const jokeComponentsArray = jokesData.map(joke => {
        return (
            //2.- para cada elemento devolvemos un componente Joke con las propiedades de ese elemento joke de
            //array (su question y su punchline)

            //3.- ojo que a cada elemento obligatoriamente le tenemos que poner una nueva propiedad llamada key
            // y asignarle un valor disnto 
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />

            //4.- finalmente devuelve un array de componentes Joke (jokeComponentsArray)
        )
    })
    //----------------------------------------------------------------

    return (
        <div>
           {/* metemos aqui directamente el array de componentes que hemos mapeado antes */}
           {jokeComponentsArray}
        </div>
    )
}

export default App