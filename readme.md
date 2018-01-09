## Fetching data - Unidirectional data flow
---

Now we are going to get all our posts from the server.
1. Open the App component
2. Try different lifecycles, just log them.
3. Understanding lifecycles, fetch on componentDidMount, instanced class
4. Once we have the posts list, we have to iterate over it and render one post Component for each post in the list.
5. Now that we are listing all the blog posts, it’d be nice to dynamically add a post to the list when we create it, without having to refresh the page.

> A unidirectional data flow means that when designing a React app you often nest child components within higher-order parent components. The parent component(s) will have a container for the state of your app (typically an immutable variable called state, unless you are using Redux or Flux, in which case you would encapsulate your app’s state in a store). The parent component typically passes down a snapshot of its state to its child components via read-only props and then the child components can communicate with the parent to update the state via callbacks which are bound to a button or form in the child component.

[Next step](https://github.com/sgonzalezml/workshop-react/tree/v4)