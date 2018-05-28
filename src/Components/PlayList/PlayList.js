import React, { Component } from 'react';
import './Playlist.css';

class Playlist extends Component {
  constructor(props) {
    super(props);
	this.state = {playlistName: ' '};
 	this.state = {playlistTracks: {name:'', artist:'', album:'', id:''}};
    this.handleNameChange = this.handleNameChange.bind(this);
 
  }

  handleNameChange(e) {
     e.onNameChange(e.value);
  }  // end of handleNameChange

  render() {
    return (
       <div className="Playlist">
         <input defaultValue={'New Playlist'}/>
         <TrackList tracks={this.props.playlistTracks}  
		  onRemove={this.props.onRemove}   >
         <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
       </div>
    );
  }
}

export default Playlist ;
