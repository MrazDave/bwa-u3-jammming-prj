import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
  }

   let (isRemoval){
      isRemoval=false;
   }

  addTrack() {
    this.setState({ onAdd: this.props.track });
  }
     
  removeTrack() {
    this.setState({ this.state.onRemove: this.props.track  });
  }
     
  render() {
     
	 renderAction() {
        if (isRemoval) {
           return '-';
		}
        else {
           return '+';	 
	    }
     }
    return (
	
       <div className="Track">
         <div className="Track-information">
           <h3><!-- track name will go here --></h3>
           <p><!-- track artist will go here--> | <!-- track album will go here --></p>
         </div>
         <a className="Track-action" onClick={this.Addtrack} 
            { this.renderAction ? '-' : ` href="-"  onClick={this.removeTrack} ` }
            { this.renderAction ? '+' : ` href="+"  onClick={this.addTrack} ` }   >

		 
       </div>
    );
  }
}

export default Track;
