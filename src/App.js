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
    query: '',
    value: 'none'
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        booksList: data
      })
    })
  }

  booksSearch = query => {
    if(query !== '') {
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

  shelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      console.log('shelfUpdate', data);
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
          <BooksList shelves={shelves} shelfkeys={shelfkeys} books={this.state.booksList} shelfupdate={this.shelfUpdate} selectupdate={this.selectUpdate} />
        )} />
        <Route path='/search' render={() => (
          <BooksSearch books={this.state.booksSearch} search={this.booksSearch} shelfupdate={this.shelfUpdate} value={this.state.value} selectupdate={this.selectUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp
