import React, { Component } from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import Post from './Post';

export default class PostList extends Component {
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
        return (<div className="postList">
            {this.state.posts.map( (post) => {
                return (<Post
                    author={post.author}
                    title={post.title}
                    description={post.desc}
                    date={post.date}
                    id={post.id}
                    key={post.id}
                />)
            } )}
        </div>);
    }
}