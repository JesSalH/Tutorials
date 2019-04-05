import React from 'react';

export class TodolistItem extends React.Component<any, any> {
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> Todo 1
        </label>
      </li>
    );
  }
}



//Note that this control could also be created as a function instead of a class:
export const TodoListItem = (props) => {
  return (
    <li className="todo">
      <label>
        <input type="checkbox" /> Todo 1
      </label>
    </li>
  );
}






// A state variable to hold the input's value:
this.state = { labelInput: '' };

// A callback function to update that value:
_onChange = evt => {
  this.setState({ labelInput: evt.target.value });
};

// With those two pieces in place, we can update our uncontrolled input to being controlled.
<input
  // este valor se actualiza cada vez que se lanza on change (se supone que esta funcion esta dentro de render) 
  value={this.state.labelInput}
  // este metodo cambia el valor de la variable de estado labelInput 
  onChange={this._onChange} 
  className="textfield" 
  placeholder="add todo" 







  // con TYPESCRIPT lo dejamos todo tipado

// esto es una interface de props
  interface TodoListProps {
    filter: string; //any puede ser double, float, etc...
    todos: any;
    complete: any;
  }


// Cuando creamos la clase (y la exportamos) le anyadimos la interface de props, con el TIPO de valor any... (creo que any aqui ser'ia char, double, float, etc)
export class TodoList extends React.Component<TodoListProps, any>


{/* tb podemos especificar que posibles valores tiene la variable filter */}
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  // En este caso estamos diciendo que complete es uns funcion que recibe un string y devuelve void
  complete: (id: string) => void;
}



{/* interface torda */}
interface TodoListProps {
  // filter puede tomar 3 valores
  filter: 'all' | 'active' | 'completed';


  todos: {

    [id: string]: {
      label: string;
      completed: boolean;
    };
  };

  // funcion
  complete: (id: string) => void;
}


{/ */}