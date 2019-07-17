import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends Component {

  state = {
    booksList: [],
    value: 'none'
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        booksList: data
      })
    })
  }

  shelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      BooksAPI.getAll().then(data => {
        this.setState({
          booksList: data
        })
      })
    })
  }

  selectUpdate = option => {
    this.setState({
      value: option
    })
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <BooksList books={this.state.booksList} shelfupdate={this.shelfUpdate} selectupdate={this.selectUpdate} />
        )} />
        <Route path='/search' render={() => (
          <BooksSearch search={this.booksSearch} shelfupdate={this.shelfUpdate} value={this.state.value} selectupdate={this.selectUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp
