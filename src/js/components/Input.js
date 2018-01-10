import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component {
    render() {
        return (<div className="input">
            <div>
                <div className="input-group mb-3">
                    <input type="text" placeholder="Titulo" className="form-control input-title" />
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                    <input type="text" placeholder="Autor" className="form-control input-author" />
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                    <input type="textarea" placeholder="Descripcion" className="form-control input-desc" />
                </div>
            </div>
            <button type="button" className="btn btn-secondary">Post!</button>
        </div>);
    }
}