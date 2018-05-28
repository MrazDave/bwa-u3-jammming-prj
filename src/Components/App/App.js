import React, { Component } from 'react';
import './App.css';
import {SearchBar} from '../../Components/SearchBar/SearchBar';
import {Spotify}  from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
	this.state = {playlistName: ' '};
    this.state = {searchResults: {name:'', artist:'', album:'', id:''}};
	this.state.playlistName = 'Joe';
	this.state = {playlistTracks: {name:'', artist:'', album:'', id:''}};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }
  
//found help on this from  https://stackoverflow.com/questions/47101901/add-remove-tracks-to-a-playlist-using-react 
  addTrack(track) {
     if (this.state.playlistTracks.find(savedTrack => savedTrack.id  === track.id)) {
        return;
     }
    this.setState(this.state.playlistTracks.push(track.id));
  }  //end of AddTrack
  
  removeTrack(track){
    this.setState( this.state.playlistTracks.filter(track =>track.id) );
  }  //end of removeTrack
  
  updatePlaylistName(name){
      this.setState(this.state.playlistName: (name));
  }  //end of updatePlaylistName
  
  savePlayList(playListName, trackURI) {
     let uriArray = [];
     this.state.playlistTracks.forEach(track => { uriArray.push(track.uri) })
	 return this.Spotify.savePlaylist(playListName, uriArray)
  }  //end of savePlayList
  
  search(term) {
	 return this.Spotify.search(term);
  }  //end of search

  
  render() {
    return (
       <div>
         <h1>Ja<span className="highlight">mmm</span>ing</h1>
         <div className="App">
           <div className="App-playlist">
           </div>
         </div>
         <div className="SearchBar">
           <div className="SearchResults" 
		      searchResults={this.props.search}
			  onAdd={this.addTrack} 
			  onRemove={this.removeTrack} 
              onSearch={this.search}     >
           </div>
         </div>
         <div className="Playlist"  
		    playlistName={this.state.playlistName}  
		    playlistTracks={this.state.playlistTracks} 
			onNameChange={this.state.playlistName}
			onSave = {this.state.savePlayList}
			>
         </div>
       </div>
    );
  }
}

export default App;

