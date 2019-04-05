import React from "react"

import Joke from "./Joke"

function MyApp(){

    return(

        <div>
            <Joke
                obj = 
                {{
                    question: "que haces?",
                    punchline: "hey"
                }}
            />


        </div>
    )
}


export default MyApp