import React from 'react';

class Playlist extends React.Component {
    render() {
        return(
            <div>
                <div className="Playlist">
                    <input defaultValue={'New Playlist'}/>
                    // insert tracklist here
                    <a className="Playlist-save">SAVE TO SPOTIFY</a>
                </div>
            </div>
        )
    }
}

export default Playlist;