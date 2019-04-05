}
import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

class App extends React.Component {
    //constructor con su variable de estado booleano
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    //funcion que cambia el valor de la variable de estado isLoggedIn
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    


    render() { 
        // este texto depende del valor de la var de estado isLoggedIn  
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"

        return (
            <div>
                {/* evento en el boton que lanza la funcion que cambia el valor de la variable de estado*/}
                {/* ademas el boton toma como texto el valor de la variable */}
                <button onClick={this.handleClick}>{buttonText}</button>
                {/* El h1 igual, coge de texto el valor de la variable cada vez que se renderiza */}
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App
