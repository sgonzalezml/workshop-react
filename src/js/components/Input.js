import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component {
    render() {
        return (<div className="input">
            <div>
                <div className="input-group mb-3">
                    <input type="text" placeholder="Titulo" className="form-control input-title" aria-label="Title" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                    <input type="text" placeholder="Autor" className="form-control input-author" aria-label="Author" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                    <input type="textarea" placeholder="Descripcion" className="form-control input-desc" aria-label="Descripcion" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
            <button type="button" class="btn btn-secondary">Post!</button>
        </div>);
    }
}