
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

5. When the post is done succefully, the new post is returned with its id and date. We can see it in the console.

[Next step](https://github.com/sgonzalezml/workshop-react/tree/v5)