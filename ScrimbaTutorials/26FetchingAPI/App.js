import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {

    constructor() {
        super()
        this.state = {
            // el state tiene un booleano y una var vacia 
            loading: false,
            character: {}
        }
    }
    
    //este metodo se lanzaba cuando el componente se cargaba por primera vez
    componentDidMount() {

        //ponemos loading a true (cambio en el state) --> Se lanza el render
        this.setState({loading: true})

        //hacemos el fetch a la api y recibimos un json como respuesta
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                // nuevo cambio en el state --> se lanza el render otra vez
                this.setState({
                    //volvemos a poner loading a false
                    loading: false,
                    //cargamos en caracter el json recibido
                    character: data
                })
            })
    }
    

    //render se lanza cada vez que hay cambios en el state
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
