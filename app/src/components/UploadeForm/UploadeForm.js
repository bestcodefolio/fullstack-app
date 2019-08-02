import React, { Component } from 'react';
import './UploadeForm.css';

export default class FileUploader extends Component {
    handleChange = event => {
        this.props.onChange(event);
    }
    handleClick = () => {
        this.props.onClick();
    }
    render() {
        return(
            <form className='upload'>
                <div className='form-group'>
                    <label className='label'>
                        <i className='material-icons'>Add file</i>
                        <span className='title'>upload gif</span>
                        <input type='file' onChange={this.handleChange} />
                    </label>
                    <button className='button add-file-button' onClick={this.handleClick}>Return</button>
                </div>
            </form>
        )
    }
};