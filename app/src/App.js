import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getGifById, selectQuery, fetchGifsIfNeeded, invalidateQuery } from './redux/actions/actions.js';

import Search from './containers/Search/Search.js';
import AddFile from './containers/AddFile/AddFile.js';
import GifInfo from './components/GifInfo/GifInfo.js';
import GifList from './components/GifList/GifList.js';
import Confirm from './components/Confirm/Confirm.js';
import EditForm from './components/EditForm/EditForm.js';

import { getQuery, getNumber } from './services/pathhelper.js';

import './App.css';
import { UpdateDocumentRequest } from './redux/actions/updatefile.js';

class App extends Component {
    constructor() {
        super();
        this.number = 25;
    }
    number = +getNumber() !== 0 ? + getNumber() : this.number;
    componentDidMount = () => {
        const { dispatch, selectedQuery } = this.props;
        dispatch(selectQuery(getQuery(), getNumber()));
        dispatch(fetchGifsIfNeeded(selectedQuery, getNumber()));
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.selectedQuery !== this.props.selectedQuery) {
            const { dispatch, selectedQuery } = nextProps;
            dispatch(fetchGifsIfNeeded(selectedQuery, getNumber()));
        }
    };
    handleChange = (query) => {
        this.number = 25;
        this.props.dispatch(selectQuery(query));
    };
    handleRefresh = event => {
        event.preventDefault();
        this.number += 25;
        const { dispatch, selectedQuery } = this.props;
        dispatch(invalidateQuery(selectedQuery));
        dispatch(fetchGifsIfNeeded(selectedQuery, this.number));
    }
    getGif = id => {
        return this.props.dispatch(getGifById(id));
    }
    updateFile = (id, title, description, author, tags, source) => {
        this.props.dispatch(UpdateDocumentRequest(id, {
            title: title,
            description: description,
            author: author,
            tags: tags,
            source: source
        }));
    }
    render() {
        const { gifs } = this.props;
        return(
            <Router>
                <h2 className='headline'>GIPHY</h2>
                <Search {...this.props} number={this.number} onSubmit={this.handleChange} />
                <Link to={`/addfile`}>
                    <button className='fa fa-plus-circle'/>
                </Link>
                <Route path='/search/'
                    render={() => (
                        <GifList 
                            onClick={event => this.handleRefresh(event)}
                            gifs={gifs}
                        />
                    )}
                />
                <Route exact path='/gif/:id/'
                    render={(props) => (
                        <GifInfo {...this.props} {...props} gif={this.getGif(props.match.params.id)}/>
                    )}
                />
                <Route path='/gif/:id/edit'
                    render={(props) => (
                        <EditForm {...props} 
                            gif={this.getGif(props.match.params.id)} 
                            path={`/search?q=${this.props.selectedQuery}&l=${this.number}`}
                            flag={'edit'}
                            id={props.match.params.id}
                            onUpdate={this.updateFile}
                        />                            
                    )}
                />
                <Route path='/gif/:id/delete'
                    render={(props) => (
                        <Confirm {...props} gif={this.getGif(props.match.params.id)} dispatch={this.props.dispatch} path={`${this.props.selectedQuery}&l=${this.number}`}/>
                    )}
                />
                <Route path='/addfile/' 
                    render={(props) => (
                        <AddFile {...props} {...this.props} />
                    )}
                />
            </Router>
        )
    }
};

const mapStateToProps = state => {
    const { selectedQuery, gifsByQuery } = state;
    const {
        isFetching,
        items: gifs
    } = gifsByQuery[selectedQuery] || {
        isFetching: true,
        items: []
    };
    return {
        selectedQuery,
        gifs,
        isFetching,
    };
};

export default connect(mapStateToProps)(App);
