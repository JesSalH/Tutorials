//ESTO ES UN EJEMPLO DE FORMS

import React, {Component} from "react"

class App extends Component {
    
    constructor() {
        super()
        //El State tiene 2 variables
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    //Este m'etodo recibe un evento (que es el input text) y lo que hace es asignar a un elemento del state (que puede ser firstName o lastName, segun el nombre del evento que lo ha disparado)
    // y le asigna el valor de su textbos
    handleChange(event) {

        //lo que hace aqui es un DESTRUCTURING del objeto evento que nos llega y coge su name y value... ??
        const {name, value} = event.target

        //aqui asigna a segun que elemento del state (depende del nombre del evento) el value de la textbox de ese mismo evento
        this.setState({
            [name]: value
        })
    }
    
    render() {

        return (

            <form>
                <input 
                    type="text"
                    // cada vez que se renderiza este textbox vuelve a poner como valor lo que se ha guardado en el estate 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name"
                    //cada vez que introducimos una nueva letra lanza el handlechange
                    //que carga el valor de la caja de texto en el state 
                    onChange={this.handleChange} 
                />

                <br />
                {/* este textbox hace lo mismo */}
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                {/* este h1 escribe los dos elementos del state cada vez que se renderiza */}
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App


//EJEMPLO DE DESTRUCTURING
let array = [150, 400, 780, 1500, 200];
let [frst, second, third] = array; // Assigns the frst three elements of the array 
console.log(third); // Prints 780
