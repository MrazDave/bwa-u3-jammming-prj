import React, { Component } from 'react';
import './TrackList.css';

class TrackList extends Component {
  render() {
    return (
       <div className="TrackList">
           <!-- You will dd a map method that renders a set of Track components  -->
		          {
          this.props.tracks.map(track => {
            return <Track track={track.id} 
			   name={this.props.track.name} 
			   artist={this.props.track.artist}
			   album={this.props.track.name}
			   onAdd={this.props.onAdd}
			   onRemove={this.props.onRemove}
			   isRemoval=false
			   />
          })
        }
       </div>
    );
  }
}

export default TrackList ;
