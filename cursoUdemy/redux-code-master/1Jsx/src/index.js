// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  // variable tipo objeto con un atributo llamado text con valor 'Click me'
  const buttonText = { text: 'Dale a esto man' };
  // variable normal
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
      {/* asi metemos una variable directamente en el jsx */}
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* esta es la forma de meter inline styles */}
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {/* asi metemos un objeto y su propiedad */}
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
