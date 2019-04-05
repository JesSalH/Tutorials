import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    


    // Cuando cargamos el componente hacemos un fetch
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                //nos llega un array con imagenes en formato json,
                // lo guardamos en la varible memes y se lo asignamos a la propiedad de state allMemeImgs
                const {memes} = response.data
                //console.log(memes[0]) para ver la estructura de cada objeto --> necesitamos url
                this.setState({ allMemeImgs: memes })
            })
    }
    
    // Este evento pone el contenido que se va escribiendo en las textBoxes
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit(event) {
        // esto dice que lo hace para evitar que se actualice el evento o algo asi...
        event.preventDefault()

        //genera un numero entre 0 y la longitud del array de memes
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        //aqui guardamos la url de la imagen aleatori
        const randMemeImg = this.state.allMemeImgs[randNum].url
        //
        this.setState({ randomImg: randMemeImg })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    {/* Ojo que aunque no ponga nada, al darle al button se lanza el evento onsubmitt del form */}
                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator