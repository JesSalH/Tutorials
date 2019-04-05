import React from "react"

//componente normal
function App(props) {
    return (
        <div>
            <h1>Code goes here {props.name}</h1>
        </div>
    )
}


//componente class-based
class App extends React.Component {

    //aqui arriba podemos crear nuestros metodos
    yourMethodHere() {
        
    }
    
    render() {
        //y aqui los llamamos
        this.yourMethodHere()

        return (
            <div>
                {/* ojo que hay que poner this para llamar a las props */}
                <h1>Code goes here {this.props.name}</h1>
            </div>
        )
    }
}

export default App

