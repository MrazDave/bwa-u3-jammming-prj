/*
SpotifyForJamming
For my codeacademy Jamming1 code
Client ID b26b14fd92a7414bad09d7697d44a678

*/

//import React, { Component } from 'react';

const clientId = 'b26b14fd92a7414bad09d7697d44a678';
const redirectURL = 'http://localhost:3000/';

Spotify =  {
//   clientId = 'b26b14fd92a7414bad09d7697d44a678';
//   redirectURL = 'http://localhost:3000/';
   
   getAccessToken (accessToken) {
      let expiresAt = '';
      let accToken = '';
	  let expireTime = '';
      if (accessToken) {
	     return accessToken;
	  }
	  else {
	     // help from https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
	     let currentURL = window.location.href;
		 let urlParts = currentURL.split('&');
    //     let expireTime = '';
		 urlParts.forEach((element) => {
		    if (element.match(/access_token /g)) {
			   let splitAccess = element.split('=');
			    accToken = splitAccess[1];
			}   
			else if (element.match(/expires_in/g) ) {
			   let splitExpires = element.split('=');
			   expireTime = splitExpires[1];			
			   } //end ifs
		 }); //end urlparts
	     
		 if (accToken.length > 0  &&  expireTime.length > 0) {
		    window.setTimeout(() => accessToken = '', expiresAt * 1000);
            window.history.pushState('Access Token', null, '/');
			accessToken = accToken;
			expiresAt = expireTime;
		 }  //end accToken IF
		 else if (accToken.length === 0) {
            const newURL = 'https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI';
            let withclientID = newURL.replace ('CLIENT_ID', this.clientId);
            let withRedirectURL = withclientID.replace ('REDIRECT_URI', this.redirectURL);
            window.location(withRedirectURL);
		 }  //end accToken empty IF
	  } // end accessToken IF
   }, // end of getAccessToken method

   search(searchTerm) {
       const tempURL = 'https://api.spotify.com/v1/search?type=track&q=TERM';
       const accessToken = this.getaccessToken();
     //  const apiURL = tempURL.replace('TERM', searchTerm);
	   const headers = { headers: {Authorization: `Bearer ${accessToken}`}};
   
       fetch(tempURL, headers).then(response => { 
	      if (response.ok) {
	      let resp = response.json();
		  return resp.response.tracks.map(track =>  ({
		     ID: track.id,
             Name: track.name,
             Artist: track.artists[0].name,
             Album: track.album.name,
             URI: track.uri
             }) );   
      }
      throw new Error('Request failed!');
   }, 
   networkError => {
      console.log(networkError.message);
   }).then(jsonResponse => jsonResponse);
  }, //end of search method
   
  savePlaylist(playListName, trackURI) {
     if (playListName.length === 0  &&  trackURI.legth === 0) {
	    return
	 }

	 const accessToken = this.getaccessToken();
     const headers = { headers: {Authorization: `Bearer ${accessToken}`}};
	 let userId = '';
	 let firstURL = 'https://api.spotify.com/v1/me?type={headers: headers}';
     fetch(firstURL, userId).then(response => { 
	    if (response.ok) {
		   userId = response.json().userId;
         }
        throw new Error('Request failed!');
     }, 
     networkError => {
        console.log(networkError.message);
     }).then(jsonResponse => jsonResponse);


     let playlistObject = { headers: '', method: '', body: ''};
	 let playListID = '';
	 let secondURL = 'https://api.spotify.com/v1/users/{userId}/playlists';
     fetch(secondURL, playlistObject, playListID).then(response => { 
	    if (response.ok) {
		   playListID = response.json().playlistid;
        }
        throw new Error('Request failed!');
     }, 
     networkError => {
        console.log(networkError.message);
     }).then(jsonResponse => jsonResponse);
     

     let newPlayListObject = { headers: '', method: '', body: ''};
	 let thirdURL = 'https://api.spotify.com/v1/users/{userId}/playlists/{playListID}/tracks';
	 let newPlayListID = '';
     fetch(thirdURL, userId, newPlayListID, newPlayListObject).then(response => { 
	    if (response.ok) {
		   newPlayListID = response.json().id;
        }
        throw new Error('Request failed!');
     }, 
     networkError => {
        console.log(networkError.message);
     }).then(jsonResponse => jsonResponse);
  
  },  //end of savePlaylist
 
}

export default Spotify;