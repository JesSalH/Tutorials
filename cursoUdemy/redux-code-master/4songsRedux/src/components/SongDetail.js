import React from 'react';

// 1.- El connect para meter datos directamente en los componentes
import { connect } from 'react-redux';


// 4.- Al componente directamente le pasamos el data song???
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};


//2.- el map que pasa a estado el data de la app
const mapStateToProps = state => {
  console.log("This is the state");
  console.log(state);
  return { song: state.selectedSong };
};

//3.- esto permite que se pueda meter directamente en el songDetail data (la selected song)
export default connect(mapStateToProps)(SongDetail);
