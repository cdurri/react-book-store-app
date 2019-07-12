import React, { Component } from 'react';
import BookShelves from './BookShelves';
import OpenSearch from './OpenSearch';

const BooksList = props => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <BookShelves shelves={props.shelves} shelfkeys={props.shelfkeys} books={props.books} />
    <OpenSearch />
  </div>
)

export default BooksList;
