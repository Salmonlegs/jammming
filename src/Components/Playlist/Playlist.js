import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
    render() {
        return(
            <div>
                <div className="Playlist">
                    <input defaultValue={'New Playlist'}/>
                    <Tracklist />
                    <a className="Playlist-save">SAVE TO SPOTIFY</a>
                </div>
            </div>
        )
    }
}

export default Playlist;