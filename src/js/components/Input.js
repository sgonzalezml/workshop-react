import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component {
    render() {
        return (<div className="input">
            <div>
                <textarea className="input-title" />
                <textarea className="input-author" />
            </div>
            <textarea className="input-desc" />
        </div>);
    }
}