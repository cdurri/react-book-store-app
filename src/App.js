import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div>Books</div>

    )
  }
}

class BooksList extends Component {
  render() {
    return (
      <div>BooksList</div>
    )
  }
}

class BookShelf extends Component {
  render() {
    return (
      <div>BookShelf</div>
    )
  }
}

const BookShelfBooks = props => (
  <div>BookShelfBooks</div>
)

const Book = props  => (
  <div>Book</div>
)

class BookMover extends Component {
  render() {
    return (
      <div>BookMover</div>
    )
  }
}

class BookAddNew extends Component {
  render() {
    return (
      <div>BookAddNew</div>
    )
  }
}

class BooksSearch extends Component {
  render() {
    return (
      <div>BooksSearch</div>
    )
  }
}

const BooksSearchBar = props => (
  <div>BooksSearchBar</div>
)

class BooksSearchClose extends Component {
  render() {
    return (
      <div>BooksSearchClose</div>
    )
  }
}

class BooksSearchInput extends Component {
  render() {
    return (
      <div>BooksSearchInput</div>
    )
  }
}

const BooksSearchResults = props => (
  <div>BooksSearchResults</div>
)

export default BooksApp
