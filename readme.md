# React Workshop

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


## Fetching data - Unidirectional data flow
---

1. Now we are going to get all our posts from the server using fifecycles.
+ Fetch data on componentDidMount? why ?
+ Open the App component and add different lifecycles
```jsx
componentWillMount() {
console.log('comopnentWillMount');
}

componentDidMount() {
console.log('comopnentDidMount');
}
```
+ We need to store our posts in a place where when they update, the component re-renders ---> STATE ---> So lets create it...
```jsx
constructor() {
super();
this.state = {
posts: []
}
}
```

> Using DidMount makes it clear that data won’t be loaded until after the initial render. This reminds you to set up initial state properly, so you don’t end up with undefined state that causes errors.
>
> If you ever need to render your app on the server (SSR/isomorphic/other buzzwords), componentWillMount will actually be called twice – once on the server, and again on the client – which is probably not what you want. Putting the data loading code in componentDidMount will ensure that data is only fetched from the client.

+ Lets fetch using Axios, npm install first.
```bash
$ npm install axios --save
```
```jsx
import Axios from 'axios'

componentDidMount() {
Axios.get('http://localhost:3000/posts')
.then((res) => {
this.setState({ posts: res.data.recentPosts });
})
.catch((error) => {
console.log('error', error);
})
}
```

+ And now that our state has changed, the render method is going to run.

3. In the render method lets remove the hardcoded post, replacing it for the fetched ones.
```jsx
render() {
return (<div className="postList">
{this.state.posts.map( (post) => {
return (<Post
author={post.author}
title={post.title}
description={post.description}
date={post.date}
id={post.id}
/>)
} )}
</div>);
}
```
4. See a warning ? Thats because each iterated children (Post) should have a unique key to let react know who they are. Lets use the post.id for that purpose.
```javascript
return (<Post
author={post.author}
title={post.title}
description={post.description}
date={post.date}
id={post.id}
key={post.id}
/>)
```

> A unidirectional data flow means that when designing a React app you often nest child components within higher-order parent components. The parent component(s) will have a container for the state of your app (typically an immutable variable called state, unless you are using Redux or Flux, in which case you would encapsulate your app’s state in a store). The parent component typically passes down a snapshot of its state to its child components via read-only props and then the child components can communicate with the parent to update the state via callbacks which are bound to a button or form in the child component.


## Creating a new post
--
1. We are going to add the “create post” functionality to our input component, lets use axios for that purpose.
+ To do this, open the Input component and add a handler to the inputs change event
```jsx
constructor() {
super();
this.state = {};
this.handleChange = this.handleChange.bind(this);
}

handleChange(inputId, newValue) {
console.log(`onChange fired with values: ${inputId}, ${newValue}`);
}
```

+ For every input from where we need to save the value, we will call that handler like this
```jsx
onChange={ (e) => { this.handleChange('title', e.target.value) } }
```

2. When all the inputs are logging correctly, we need to save their values in the state...
```jsx
constructor(){
super();
this.state = {
title: '',
author: '',
description: ''
}
}

handleChange(inputId, newValue) {
this.setState({ [inputId]: newValue });
}
```

3. Once the state is holding the inputs values, lets make the inputs take the value from the state, so they are fully managed by react, like this:
```jsx
value={this.state.title}
```
4. Now all we have to do is take the values from the state when the button is clicked, and create the handler method
```jsx
onClick={this.createPost}
```
```jsx
createPost() {
const body = {
title: this.state.title,
author: this.state.author,
desc: this.state.desc
};
Axios.post('http://localhost:3000/posts', body)
.then((res) => {
console.log(res);
})
}
```

5. When the post is done succefully, the new post is returned with its ID and date. We can see it in the console.

6. Now that we have the new post in our hands, we could add it dynamically to ours postList..
+ In the App component, which is holding the posts array, lets make a method to add a new one.
```jsx
addPost(newPost) {
const posts = this.state.posts;
posts.push(newPost);
this.setState(posts);
}
```
+ And bind the context in the constructor
```jsx
this.addPost = this.addPost.bind(this);
```
+ But that function needs to be called where the new post ir arriving, the Input component
> So the Input component should call that function when needed, in the API post callback.
>
> How could the Input component call a parents function ? Yes.... props.
```jsx
<Input addPost={this.addPost} />
```
+ And Input component post callback looks like this:
```jsx
createPost() {
const body = {
title: this.state.title,
author: this.state.author,
desc: this.state.desc
};
Axios.post('http://localhost:3000/posts', body)
.then((res) => {
console.log(res);
this.props.addPost(res);
})
}
```

## Introducing Proptypes
### A little help untyped languages problems
[Official documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
---
>In a few words, Proptyes is an npm package developed by Facebook that let us verify if we are sending the right type of value to a child component via prop.
>
>This verification will only show in developent environment, warning the developer about a misstyped prop.
> This is usefull to prevent future bugs based on type problems, javascript is very permissive when it comes to variable types, and if we are not careful, you could introduce bugs.

+ Lets go with an example

+ Install proptypes module
```bash
$ npm install prop-types --save
```
+ Open your Input component, import prop-types module
```jsx
import PropTypes from 'prop-types';
```

+ At the bottom of the file, outside of the class definition, we are going to declare the component propTypes like this:
```jsx
Input.propTypes = {
addPost: PropTypes.stirng.isRequired
}
```
+ Open the console in the browser, see the warning ?
Thats because addPost is NOT a `STRING`, its a `FUNCION`

Replace
```jsx
addPost: PropTypes.stirng.isRequired
```
For
```jsx
addPost: PropTypes.func.isRequired
```

# Hope you enjoyed

