import React from 'react';
import Tracklist from '../Tracklist/Tracklist';


class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {this.props.searchResults}
            </div>
        )
    }
}

export default SearchResults;