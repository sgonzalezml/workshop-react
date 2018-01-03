import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        };
    }

    renderBody() {
        if (this.state.expanded === true) {
            return (
                <div className="description">
                    {this.props.description}
                </div>
            );
        }
        return null;
    }

    render() {
        return (<div className="post">
            <div className="title">{this.props.title}</div>
            <div>
                <span className="author">{this.props.author}</span>
                <span className="date">{this.props.date}</span>
            </div>
            {this.renderBody()}
        </div>);
    }
}