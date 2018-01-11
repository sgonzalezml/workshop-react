import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import PostList from './PostList';
import Input from './Input';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
        this.addPost = this.addPost.bind(this);
    }

    componentWillMount() {
        console.log('comopnentWillMount');
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/posts')
        .then((res) => {
            this.setState({ posts: res.data.recentPosts });
        })
        .catch((error) => {
            console.log('error', error);
        })
    }

    addPost(newPost) {
        const posts = this.state.posts;
        posts.push(newPost);
        this.setState(posts);
    }

    render() {
        return (<div>
            <PostList posts={this.state.posts} />
            <Input addPost={this.addPost} />
        </div>);
    }
}