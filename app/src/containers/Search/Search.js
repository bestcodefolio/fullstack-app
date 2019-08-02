import React from 'react';
import { Redirect } from 'react-router-dom';
import './Search.css';
import { getQuery } from '../../services/pathhelper';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            isRedirect: false
        }
    }
    componentDidMount = () => {
        if (this.state.query === '') {
            const q = getQuery();
            if (q !== undefined) {
                this.setState({ query: q});
            }
        }
    }
    handleSearch = event => {
        event.preventDefault();
        if (this.state.query !== '') {
            this.props.onSubmit(this.state.query);
            this.setState({ isRedirect: true });
        }
    }
    handleInputChange = query => {
        this.setState({ query });
    };
    render() {
        const redirect = this.state.isRedirect ? <Redirect to={`/search?q=${this.state.query}&l=${this.props.number}`}/> : null;
        return (
            <form className='form' onSubmit={this.handleSearch}> 
                <div className='search'>
                    <input className='search-input' placeholder='What are you looking for?' 
                        value={this.state.query} onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <button className='search-button'>Search</button>
                </div>
                {redirect}
            </form>
        )
    };
};