import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplashKey from './keys';

class App extends React.Component {
    onSearchSubmit (term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params  : { query: term },
            headers : { Authorization: `Client-ID ${unsplashKey.access}` }
        });
    }

    render () {
        return (
            <div className="ui container" style={{ maginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
