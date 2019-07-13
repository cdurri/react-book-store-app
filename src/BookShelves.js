import React, { Component } from 'react';
import BookShelf from './BookShelf';

const BookShelves = props => (
  <div className='list-books-content'>
    <BookShelf shelves={props.shelves} shelfkeys={props.shelfkeys} books={props.books} shelfupdate={props.shelfupdate} />
  </div>
)

export default BookShelves;
