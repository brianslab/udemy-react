import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplashKey from './keys';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params  : { query: term },
                headers : { Authorization: `Client-ID ${unsplashKey.access}` }
            }
        );

        this.setState({ images: response.data.results });
    };

    render () {
        return (
            <div className="ui container" style={{ maginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images.
            </div>
        );
    }
}

export default App;
