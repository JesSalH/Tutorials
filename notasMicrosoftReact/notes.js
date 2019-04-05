

// Aqui pasamos el parametro props.text a una variable text.
const App = props => {
    const text = props.text;
    return <p>{text ? text : 'you missed something'}</p>;
  };