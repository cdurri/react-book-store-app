import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

const shelves = ['Currently Reading', 'Want to Read', 'Read'];
const shelfkeys = ['currentlyReading', 'wantToRead', 'read'];

class BookShelves extends Component  {

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

  render() {
    return (
      <div className='list-books-content'>
        <BookShelf shelves={shelves} shelfkeys={shelfkeys} books={this.state.books} />
      </div>
    )
  }
}

export default BookShelves;
