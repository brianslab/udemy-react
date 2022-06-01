import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props) {
        super(props);

        // the only time a direct assignment to this.state is done is to initialize
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Lattitude: {this.state.lat}</div>;
        }

        if (!this.state.errorMessage && !this.state.lat) {
            return <div>Loading...</div>;
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
