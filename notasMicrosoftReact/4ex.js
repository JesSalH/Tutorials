//ejemplo de componente con estado ...

constructor(props) {
    super(props);

    this.state = {
        // array de objetos
      todos: {
        '04': {
          label: 'Todo 4',
          completed: true
        },
        '03': {
          label: 'Todo 3',
          completed: false
        },
        '02': {
          label: 'Todo 2',
          completed: false
        },
        '01': {
          label: 'Todo 1',
          completed: false
        }
      },
    //   attr tipo character
      filter: 'active'
    };
  }



render() {
    // hacemos un destructuring del state  (filter y todos)
    const { filter, todos } = this.state;
    return (
      <div>
          {/* aqui renderizamos 3 componentes a los que les pasamos diferentes attrs del state */}
        <TodoHeader filter={filter} />
        <TodoList todos={todos} filter={filter} />
        <TodoFooter todos={todos} />
      </div>
    );
  }




//   esto es otro ejemplo de return
  return (
    <ul className="todos">
    {/* cogemos la lista de todos y la mapeamos */}
      {filteredTodos.map(id => (
        //   para cada elemento creamos un componente TodoListItem
            //y le pasamos como parametros esa id   
        <TodoListItem key={id} id={id} {...todos[id]} />
      ))}
    </ul>
  );




//   esto es un boton que dependiendo del valor de la varible (de estado?) filter tendr'a una clase css selected o nada 
  <nav className="filter">
    <button className={filter === 'all' ? 'selected' : ''}>all</button>
    <button className={filter === 'active' ? 'selected' : ''}>active</button>
    <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
</nav>