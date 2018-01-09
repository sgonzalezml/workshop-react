## Installing node & npm
---
1. Install node 7.2.1
2. Install the latest version of npm
```bash
    npm install npm@latest -g
```
3. Check that npm version is higher than 5
```bash
    npm --version
```
## Initializing project
---
```bash
    npm install
```
## Introducing React
---
1. In client.js file, lets create our first react component (which is going to be our App container)
```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (<div>App</div>);
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
```