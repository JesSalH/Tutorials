import React from 'react';
import ReactDOM from 'react-dom';

// Estos 2 imports hacen falta para ... 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// importamos componente app
import App from './components/App';

// importamos reducers
import reducers from './reducers';


// lo que vayamos a renderizar (nuestra App) va wrapped en un provider
ReactDOM.render(

  // el provider tiene un store con los reducers que hemos creado
  // ahora el componente App tiene acceso al store (con los datos?)
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  ,
  document.querySelector('#root')
);
