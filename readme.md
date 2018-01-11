
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


[Next step](https://github.com/sgonzalezml/workshop-react/tree/v5)