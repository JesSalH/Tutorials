/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

import React from "react"
//todo item era un component
import TodoItem from "./TodoItem"
//todos data era un array de toDos
import todosData from "./todosData"


//class-based component
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            //1.- a todos le asignamos el array todosData
            todos: todosData
        }
    }
    
    render() {
        //2.- Ojo porque estamos mapeando directamente la propiedad todos del state y la transformamos en un array de componentes
        //(antes lo que haciamos era directamente mapear el array todosData)
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App