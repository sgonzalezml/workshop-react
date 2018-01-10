## Fetching data - Unidirectional data flow
---

Now we are going to get all our posts from the server.
1. Open the App component
2. Lifecycles, fetch data on componentDidMount? why ?
+ Getting our posts from the server, open the PostList component and add different lifecycles
```jsx
    componentWillMount() {
        console.log('comopnentWillMount');
    }

    componentDidMount() {
        console.log('comopnentDidMount');
    }
```
+ We need to store our posts in a place where when they update, the component re-renders ---> STATE so lets create it
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

+ Lets fetch using Axios, npm install first
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
    }
```

+ And now that our state has changed, the render method is going to run.

3. In the render method lets remove the hardcoded post, replacing it for the fetched ones.
```jsx

```
4. Now that we are listing all the blog posts, it’d be nice to dynamically add a post to the list when we create it, without having to refresh the page.

> A unidirectional data flow means that when designing a React app you often nest child components within higher-order parent components. The parent component(s) will have a container for the state of your app (typically an immutable variable called state, unless you are using Redux or Flux, in which case you would encapsulate your app’s state in a store). The parent component typically passes down a snapshot of its state to its child components via read-only props and then the child components can communicate with the parent to update the state via callbacks which are bound to a button or form in the child component.

[Next step](https://github.com/sgonzalezml/workshop-react/tree/v4)