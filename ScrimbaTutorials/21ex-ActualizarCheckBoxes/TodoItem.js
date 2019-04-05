import React from "react"

function TodoItem(props) {

    // aqui le metemos una variable que es un estilo
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                // en el onChange lanzamos la funcion que iba asociada a EventoCambio (la handleChange)
                //  y tb le pasamos como par'ametro la id del objeto item que hemos recogido al mapear antes 
                onChange={() => props.EventoCambio(props.item.id)}
            />
             {/* Si nos han pasado la propiedad completed a true le damos un estilo, si no lo dejamos a null */}
             {/* De texto le pondremos lo que nos pasen como text */}
             <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem