

//Notillas Redux

// Create a Store

// El primer parametro es el reducer principal y el segundo el estdo inicial del State Tree (el estado de todas las cosas de la app)
const store = createStore(reducer, initialState);



// creating reducers

// given this example state tree
// El state tiene dos variables, 
    //una llamada todos, a la que podemos pasar un string y devuelve un objeto todo item???  
{
    todos: {
      [id: string]: TodoItem,
    },
  
    //la otra variable se llama filter y solo tiene 3 posibles valores
    filter: 'all' | 'complete' | 'active'
  }



// 1. Organize reducers according to the keys of the state tree object
// -----------------------------------------------------------------------
//   We would organize our reducers matching the keys of the state tree and combine them with combineReducers():

//  Este es un reducer que creamos nosotros
import { createReducer } from 'redux-starter-kit';

// el combine reducers creo que sirve para juntar todos los reducers
import { combineReducers } from 'redux';


// creamos un combineReducer que asigna valores a los posibles valores del state
const reducer = combineReducers({

    // a la primera variable del state le pasamos un create reducer que tiene un add to do que hace algo
  todos: createReducer({}, {

    addTodo: (state, action) => { /* ... */ }
  }),

  // a la segunda variable del state (filter) le pasamos otra funcion create reducer con un parametro 'all'
//   y luego hace un setFilter de algo...
  filter: createReducer('all', {
    setFilter: (state, action) => { /* ... */ }
  })
})

//----------------------------------------------------------------------


// 2. Write the reducers with mutables
// ----------------------------------------------------------------------
// first argument: initial state
// second argument: object whose keys correspond to possible values of action.type
const todosReducer = createReducer(
    {},
    {
      addTodo: (state, action) => {
        state[action.id] = { label: action.label, completed: false };
      }
    }
  );
//   ---------------------------------------------------------------------



// 3.- Dispatching actions
//  ------------------------------------------------------------------------------------------------------
Dispatching an action will pass the action and the current state to the reducers. The root reducer will produce a new snapshot of the entire state tree. We can inspect the affected snapshot with the help of getState().

const store = createStore(reducer, initialState);
store.dispatch({ type: 'addTodo', label: 'hello' });
store.dispatch({ type: 'addTodo', label: 'world' });
console.log(store.getState());
Creating these action messages by hand is tedious, so we use action creators to do that:

const actions = {
  addTodo = (label: string) => ({ label, id: nextId(), completed: false })
};

store.dispatch(actions.addTodo('hello'));
//  -----------------------------------------------------------------------------------------------------------------


