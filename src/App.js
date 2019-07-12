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
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })
  }

  // raise the state to here
  // componentDidMount to here
  // have handle methods in here

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <BooksList shelves={shelves} shelfkeys={shelfkeys} books={this.state.books} />
        )} />
        <Route path='/books-search' render={() => (
          <BooksSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp
