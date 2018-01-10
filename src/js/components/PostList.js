import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

export default class PostList extends Component {
    render() {
        return (<div className="postList">
            <Post
                author={'yo'}
                title={'title'}
                description={'descripcion del post'}
                date={'22/04/67'}
                id={1}
            />
        </div>);
    }
}