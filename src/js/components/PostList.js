import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

export default class PostList extends Component {
    render() {
        return (<div className="postList">
            {this.props.posts.map( (post) => {
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