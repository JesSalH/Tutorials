import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



// Este componente tiene un state con 2 variables: lat y errorMessage
class App extends React.Component {

// podemos poner el state aqui directamente en lugar de en el contructor (con this.state)
  state = {
    lat: null, 
    errorMessage: '' 
  };


  componentDidMount() {
    // esta es una funcion que si va bien devuelve un objeto position con datos
    window.navigator.geolocation.getCurrentPosition(

      // si es ok (primer parametro) guardamos en la variable lat del estado la latitud del objeto devuelto position
      // esto es una funcion call-back, se ejecuta cuando recupera la info
      position => this.setState({ lat: position.coords.latitude }),

      // si devuelve error guardamos en la variable de estado errorMessage el erro que haya dado
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    // Si hay error (existe) devuelve la variable de State errorMessage
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    //Si no existe errormessage devuelve el componente SeasonDisplay al que le pasamos la latitiud
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // Esto es lo que devuelve mientras aun no se ha cargado el estado
    return <Spinner message="Please accept location request" />;
  }



  //Todo componente class-based debe tener un Render()
  // render llama a renderContent
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

// renderizamos app en div root
ReactDOM.render(<App />, document.querySelector('#root'));
