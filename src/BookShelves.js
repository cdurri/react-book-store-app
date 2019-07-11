import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookShelves extends Component  {
  state = {
    shelves: ['Currently Reading', 'Want to Read', 'Read']
  }
  render() {
    return (
      <div className='list-books-content'>
        <BookShelf shelves={this.state.shelves} />
      </div>
    )
  }
}

export default BookShelves;
