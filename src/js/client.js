import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (<div>Works !!!</div>);
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);