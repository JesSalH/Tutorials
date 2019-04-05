import React from "react"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        //en el contador hacemos le binding del m'etodo que va a usar un setState
        this.handleClick = this.handleClick.bind(this)
    }
    
    //este m'etodo usa un set state y tambien un prevState
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* llamamos al metodo con .this */}
                <button onClick={this.handleClick}>Change!</button>

                {/* Asi es como pasariamos el valor de count a la propiedad de algun elemento  */}
                <ChildComponent numeroClicks={this.state.count}/>
            </div>
        )
    }
}

export default App
