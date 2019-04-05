// To create an empty context
const TodoContext = React.createContext(undefined);

class TodoApp extends React.Component {
  render() {
    // Pass in some state and functions to the provider's value prop
    return (
        // Lo mete todo dentro de un TodoContext.Provider...
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this._addTodo,
          setFilter: this._setFilter,
          /* same goes for remove, complete, and clear */
        }}>
        <div>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
      </TodoContext.Provider>
    );
  }
}


// Asi se usa el Provider desde una clase Componante
class TodoHeader extends React.Component {
    render() {
      // Step 1: use the context prop
      return <div> Filter is {this.context.filter}</div>;
    }
  }
  
  // Step 2: be sure to set the contextType property of the component class
  TodoHeader.contextType = TodoContext;





//   Asi usamos el provider desde un componente funcional
  const TodoFooter = props => {
    const context = useContext(TodoContext);
    return (
      <div>
        <button onClick={context.clear()}>Clear Completed</button>
      </div>
    );
  };