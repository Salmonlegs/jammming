import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{
      trackname: '',
      artist: '',
      album: '',
      }]
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
              <SearchResults />
              <Playlist />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;