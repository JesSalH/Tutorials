// Como todos estos son named exports los ponemos entre llaves
import React, { Component } from 'react';

// Hacemos un import del componente connect
import { connect } from 'react-redux';

// importamos la action (funcion) de cuando le das al boton devuelve esa song
import { selectSong } from '../actions';



// Este es el componente que renderiza la lista de canciones y ha venido del infierno
// Ojo que este componente tiene de props el array songs del state
// tiene 2 metodos, renderList() y render()
class SongList extends Component 
{
      renderList() 
      {
        //para cada objeto (song) del array songs devuelve un tocho de div con la cancion y el boton
          return this.props.songs.map(song => 
            {
                return (
                  // aprovechamos y le damos de id a cada div el titulo de la cancion
                  <div className="item" key={song.title}>

                      {/* esto es un div que engloba un boton (semantic-ui) */}
                      <div className="right floated content">
                        <button
                          className="ui button primary"
                          // props tb tiene una funcion selectSong que recibe un objeto tipo song
                          // ojo que select song es una action y esta aqui metida en las props....
                          // creo que se puede pasar asi directamente por el connect
                          onClick={() => this.props.selectSong(song)}
                        >
                          Select
                        </button>
                      </div>

                      {/* este es el div con el titulo de la cancion */}
                      <div className="content">{song.title}</div>
                  </div>
                );

            });
      }


      //render llama a renderlist
      render() 
      {
        return <div className="ui divided list">{this.renderList()}</div>;
      }
}


// Esta funcion coge todos los datos del store y los guarda en el state

// Automaticamente el parametro state recoge todos los datos que hay en el store (que son la lista de anciones y la selected song)
// en este caso de todo el state (store) solo nos interesa la lista de canciones (llamada songs)
const mapStateToProps = state => {
  return { songs: state.songs };
};




// LO QUE VAYA EN EL CONNECT SE PUEDE PASAR DIRETAMENTE AL COMPONENT (SongList) COMO PROPS
// todas las funciones que metamos aqui van al dispatcher de Redux y ya se pueden usar como props en el componente que pone ahi
//de param 1 le pasamos el mapToStateProps que tiene los datos del store que nos interesan
export default connect(
  mapStateToProps,
  // selectSong es un metodo llamado al darle al boton
  { selectSong }
  //de param 2 le pasamos tb el componente lista de canciones
)(SongList);
