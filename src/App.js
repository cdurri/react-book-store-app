import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends Component {
  state = {

  }

  // raise the state to here
  // componentDidMount to here
  // have handle methods in here

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <BooksList />
        )} />
        <Route path='/books-search' render={() => (
          <BooksSearch />
        )} />
      </div>
    )
  }
}

export default BooksApp
