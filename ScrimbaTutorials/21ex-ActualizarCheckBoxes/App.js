/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {

          console.log("Entra en el handle Change, con id ",  id)

          //vamos a coger la lista de todos previa que hay en el state, la vamos a mapear y volvemos a actualizar el estate con esa nueva lista
          this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                // Si la id de ese tod coincide con el parametro id cambiamos el completed
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                //devolvemos cada todo y lo vamos metiendo en el nuevo array updated todos
                return todo
            })

            //este es el return final de la funcion
            //OJO porque mas que devolver algo lo que hace es asignar a todos la nueva lista mapeada
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {

        // al TodoItem le hemos metido una nueva prop llamada Eventocambio y le asignamos la funcion handleChange
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} EventoCambio={this.handleChange}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App