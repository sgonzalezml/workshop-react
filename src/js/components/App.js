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