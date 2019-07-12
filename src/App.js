import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import { Route } from 'react-router-dom';
import './App.css';

const shelves = ['Currently Reading', 'Want to Read', 'Read'];
const shelfkeys = ['currentlyReading', 'wantToRead', 'read'];

class BooksApp extends Component {

  state = {
    booksList: [],
    booksSearch: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        booksList: data
      })
    })
  }

  booksSearch = query => {
    if(query != '') {
      BooksAPI.search(query).then(data => {
        this.setState({
          booksSearch: data
        })
      })
    } else {
      this.setState({
        booksSearch: []
      })
    }
  }

  // raise the state to here
  // componentDidMount to here
  // have handle methods in here

  render() {
    return (
      <div className='app'>
      {console.log('BookSearch', this.state.booksSearch)}
        <Route exact path='/' render={() => (
          <BooksList shelves={shelves} shelfkeys={shelfkeys} books={this.state.booksList} />
        )} />
        <Route path='/books-search' render={() => (
          <BooksSearch books={this.state.booksSearch} search={this.booksSearch} />
        )} />
      </div>
    )
  }
}

export default BooksApp
