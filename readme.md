## Fetching data - Unidirectional data flow
---

1. Now we are going to get all our posts from the server using fifecycles.
+ Fetch data on componentDidMount? why ?
+ Open the PostList component and add different lifecycles
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

[Next step](https://github.com/sgonzalezml/workshop-react/tree/v4)