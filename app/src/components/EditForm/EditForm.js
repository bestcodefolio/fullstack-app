import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './EditForm.css';

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: 'admin', 
            title: '',
            description: '',
            tags: '',
            authorIsValid: 'valid',
            titleIsValid: 'valid',
            redirect: undefined
        };
    }
    validate = value => value.length ? 'valid' : 'inValid';
    onTitleChange = e => {
        const value = e.target.value;
        this.setState({ title: value, titleIsValid: this.validate(value) });
    }
    onAuthorChange = e => {
        const value = e.target.value;
        this.setState({ author: value, authorIsValid: this.validate(value) });
    }
    onDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }
    onTagsChange = e => {
        this.setState({ tags: e.target.value });
    }
    getTitle = () => {
        if (this.state.title === '' && this.state.titleIsValid === 'valid') {
            if (this.props.gif) {
                const title = this.props.gif.title.replace('.', ' ');
                this.setState({ title: title });
                return title;
            }
        }
        return this.state.title;
    }
    getAuthor = () => {
        if (this.state.author === ''  && this.state.authorIsValid === 'valid') {
            if (this.props.gif) {
                if (this.props.gif_author) {
                    return this.props.gif.gif_author;
                }
            }
        }
        return this.state.author;
    }
    handleSubmit = e => {
        if (this.state.titleIsValid === 'valid') {
            if (this.props.flag !== 'edit') {
                this.props.onUpload(this.props.dispatch, this.state.title, this.state.description, 
                                    this.state.author, 'gif ' + this.state.tags, this.props.gif.src);
            } else {
                this.props.onUpdate(this.props.id, this.state.title, this.state.description, 
                    this.state.author, 'gif ' + this.state.tags, this.props.gif.src);
            }
            const path = this.props.path ? this.props.path : '/';
            setTimeout(() => {
                this.setState({ redirect: <Redirect to={`${path}`} /> });
            }, 1000); 
        }
        e.preventDefault();
    }
    render() {
        const gif = <img src={this.props.gif.src} className='gif-edit' alt='gif'/>;
        const titleColor = this.state.titleIsValid === 'valid' ? '#e8eeef' : 'red';
        return(
            <div className='edit-form'>
                <form onSubmit={this.handleSubmit}>
                    {gif}
                    <div>
                        <span className='number'>1</span> 
                        New Gif Info 
                    </div>
                    <input type='title'  placeholder='Gif Title *'
                        value={ this.getTitle() } 
                        onChange={this.onTitleChange}  
                        style={{ borderColor: titleColor }}
                    />
                    <textarea placeholder='About gif' onChange={this.onDescriptionChange}></textarea>
                    <div>
                        <span className='number'>2</span> 
                        Tags 
                    </div>
                    <input type='title' placeholder='#tag'
                        onChange={this.onTagsChange}
                    />
                    <div>
                        <span className='number'>3</span> 
                        Author 
                    </div>
                    <textarea placeholder='Link to your profile' readOnly value={this.getAuthor()} onChange={this.onAuthorChange} />
                    <input type='submit'/>
                    {this.state.redirect}
                </form>
            </div>
        )
    }
};
