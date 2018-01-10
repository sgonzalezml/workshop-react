import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

export default class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        console.log('comopnentWillMount');
    }

    componentDidMount() {
        console.log('comopnentDidMount');
    }

    render() {
        return (<div className="postList">
            {this.state.posts.map( (post) => {
                <Post
                    author={post.author}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    id={post.id}
                />
            } )}
        </div>);
    }
}