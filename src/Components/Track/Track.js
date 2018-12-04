import React from 'react';

class Track extends React.Component {
    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.searchResults.trackname}</h3>
                    <p><{this.props.searchResults.artist} | this.props.searchResults.album</p>
                </div>
                // not sure about the line below
                <a className="Track-action">
                    <p> if (isRemoval ? '-' : '+') </p>
                </a>
            </div>
        )
    }
};


export default Track;