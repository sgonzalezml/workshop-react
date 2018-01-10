import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        };
    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }

    renderDetails() {
        if (this.state.expanded === true) {
            return (
                <div className="card-body" onClick={this.toggleExpanded}>
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text description">{this.props.description}</p>
                </div>
            );
        }
        return null;
    }

    render() {
        return (<div className="card bg-light mb-3">
            <div className="card-header">
                <p className="author">{this.props.author}</p>
                <p className="date">{this.props.date}</p>
            </div>
            {this.renderDetails()}
        </div>);
    }
}