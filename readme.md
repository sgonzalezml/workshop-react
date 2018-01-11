## Component hierarchy
---
1. Create a components folder in /js directory
2. Now let's create our components
+ App (The container of the entire application)
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    export default class App extends Component {
        render() {
            return (<div></div>);
        }
    }
```
+ PostList (The list of all our recent posts)
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    export default class PostList extends Component {
        render() {
            return (<div className="postList"></div>);
        }
    }
```
+ Post (The view of a single post)
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    export default class Post extends Component {
        constructor() {
            super();
            this.state = {
                expanded: false
            };
            this.toggleExpanded = this.toggleExpanded.bind(this);
        }

        toggleExpanded() {
            this.setState({ expanded: !this.state.expanded });
        }

        renderDescription() {
            if (this.state.expanded === true) {
                return (
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text description">{this.props.description}</p>
                    </div>
                );
            }
            return null;
        }

        render() {
            return (<div className="card bg-light mb-3">
                <div className="card-header" onClick={this.toggleExpanded}>
                    <p className="author">{this.props.author}</p>
                    <p className="date">{this.props.date}</p>
                </div>
                {this.renderDescription()}
            </div>);
        }
    }
```
+ Input (This component allows us to create a new post)
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    export default class Input extends Component {
        render() {
            return (<div className="input">
                <div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Titulo" className="form-control input-title" />
                    </div>
                </div>
                <div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Autor" className="form-control input-author" />
                    </div>
                </div>
                <div>
                    <div className="input-group mb-3">
                        <input type="textarea" placeholder="Descripcion" className="form-control input-desc" />
                    </div>
                </div>
                <button type="button" class="btn btn-secondary">Post!</button>
            </div>);
        }
    }
```
3. In our App component we are going to add one PostList and one Input component.
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import PostList from './PostList';
    import Input from './Input';

    export default class App extends Component {
        render() {
            return (<div>
                <PostList />
                <Input />
            </div>);
        }
    }
```
4. In our PostList component we are going to add a Post, with hardcoded values, just for demostrative purpose, and check that everything is working correctly.
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import Post from './Post';

    export default class PostList extends Component {
        render() {
            return (<div className="postList">
                <Post
                    author={'yo'}
                    title={'title'}
                    description={'descripcion del post'}
                    date={'22/04/67'}
                    id={1}
                />
            </div>);
        }
    }
```

5. And finally in our client.js file we are going to render our app
```jsx
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';

    const app = document.getElementById('app');
    ReactDOM.render(<App/>, app);
```

[Next step](https://github.com/sgonzalezml/workshop-react/tree/v3)