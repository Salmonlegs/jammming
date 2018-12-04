import React from 'react';

class Tracklist extends React.Component {
    render() {
        return(
            //Need to add a map method below that renders a set of Track components 
            <div className="TrackList">
                
                <p>Red Hot Chili Peppers- Under the Bridge</p>
                <p>Red Hot Chili Peppers- Californication</p>
                <p>Red Hot Chili Peppers- Road Trippin</p>
            </div>
        )
    }
}

export default Tracklist;