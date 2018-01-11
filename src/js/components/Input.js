import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handleChange(inputId, newValue) {
        this.setState({ [inputId]: newValue });
    }

    createPost() {
        const body = {
            title: this.state.title,
            author: this.state.author,
            desc: this.state.desc
        };
        Axios.post('http://localhost:3000/posts', body)
        .then((res) => {
            console.log(res);
            this.props.addPost(res.data);
        })
    }

    render() {
        return (<div className="input">
            <div>
                <div className="input-group mb-3">
                    <input value={this.state.title} onChange={ (e) => { this.handleChange('title', e.target.value) } } type="text" placeholder="Titulo" className="form-control input-title" />
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                    <input value={this.state.author} onChange={ (e) => { this.handleChange('author', e.target.value) } }  type="text" placeholder="Autor" className="form-control input-author" />
                </div>
            </div>
            <div>
                <div className="input-group mb-3">
                    <input value={this.state.description} onChange={ (e) => { this.handleChange('description', e.target.value) } }  type="textarea" placeholder="Descripcion" className="form-control input-desc" />
                </div>
            </div>
            <button onClick={this.createPost} type="button" className="btn btn-secondary">Post!</button>
        </div>);
    }
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
}