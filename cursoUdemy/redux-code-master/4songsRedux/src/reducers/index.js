//los reducen miran las actions que les llegan y si son para ellos cogen los datos totales
// y los modifican en funcion de lo que dice esa action

// esta es la funcion que une reducers y les da una key
import { combineReducers } from 'redux';

//este reducer lo unico que hacer es devolver todas las canciones que existen
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};




// El objetivo de este reducer es devolver un nuevo dato (unico) selectedSong
// este Reducer coge el dato (unico en este caso) selectedSong y la action que que le llega
const selectedSongReducer = (selectedSong = null, action) => {

  // Si la action que le llega es de tipo 'SONG_SELECTED' ya sabe que 'es para 'el y lo que tiene que hacer es
  // modificar el banco de datos (en este caso dato unico) selected song (que es un string)
  // con la nueva selected song que lleva la propia action en su payload
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  // En casa de que esta action no sea para este reducer vuelve a devolver la selected song vieja
  return selectedSong;
};



// Aqui le damos un nombre a cada reducer para luego llamarlos
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
