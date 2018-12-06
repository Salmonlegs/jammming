import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
        name: 'Under the Bridge', 
        album: 'Californication', 
        artist: 'Red Hot Chili Peppers',
        id: 1,
      },
      ],
      playlistName: [
        {
          name: '',
          album: '',
          artist: '',
          id: '',
      }
      ],
      playlistTracks: [
        {
          name: '',
          album: '',
          artist: '',
          id: '',
        }
      ],
    };
  
  this.addTrack = this.addTrack.bind(this)
  
  }

  addTrack = (track) => {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
      return this.state.playlistTracks.push(track)
      }
    }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;