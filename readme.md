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