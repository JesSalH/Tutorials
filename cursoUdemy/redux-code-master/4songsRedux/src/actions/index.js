// Action creator

//Esta action lo que hace es que le pasamos una cancion y nos devuvlete un type song selected y de 
//payload esa misma cancion (un string)

// esta action se lanza cuando le damos al boton de la SongList

// Esto es un named export (va delante del componente)
export const selectSong = song => {
  // Return an action
  return {
    // Devuelve un un type y la payload que es un objeto tipo song
    type: 'SONG_SELECTED',
    payload: song
  };
};


