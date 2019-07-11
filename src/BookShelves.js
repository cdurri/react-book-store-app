import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'

class BookShelves extends Component  {
  state = {
    shelves: ['Currently Reading', 'Want to Read', 'Read'],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })
  }

  render() {
    return (
      <div className='list-books-content'>
        <BookShelf shelves={this.state.shelves} books={this.state.books} />
      </div>
    )
  }
}

export default BookShelves;
