import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Dialog } from '@reach/dialog';
import { DeleteDocumentRequest } from '../../redux/actions/deletefile.js';
import '@reach/dialog/styles.css';
import './Confirm.css';

export default class Confirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: ''
        }
    }
    deleteFile = () => {
        this.setState({ redirect: <Redirect to={`/search?q=${this.props.path}`}/> })
        this.props.dispatch(DeleteDocumentRequest( this.props.gif.id ))
    }
    render() {
        return(
            <Dialog className='delete-gif-modal'>
                <div className='confirmaton-form'>
                    <h1 className='gif-delete-headline'>DELETE GIF</h1>
                    <img className='delete-gif' src={this.props.gif.src} alt={this.props.gif.description}/>
                    <p>Are you sure?</p>
                    <div className='confirm-buttons'>
                        {/* <Link to={`/search?q=${this.props.path}`} style={{ textDecoration: 'none' }} > */}
                        <button className='button-danger buttons' onClick={this.deleteFile}>OK</button>
                        {/* </Link> */}
                        {this.state.redirect}
                        <Link to={`/gif/${this.props.match.params.id}?q=${this.props.path}`} style={{ textDecoration: 'none' }} >
                            <button className='button-default buttons'>Cancel</button>
                        </Link>
                    </div>
                </div>
            </Dialog>
        )
    }
};