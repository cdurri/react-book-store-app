import React from 'react';
import BookShelves from './BookShelves';
import OpenSearch from './OpenSearch';

const BooksList = ({ shelves, shelfkeys, books, shelfupdate }) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <BookShelves shelves={shelves} shelfkeys={shelfkeys} books={books} shelfupdate={shelfupdate} />
    <OpenSearch />
  </div>
)

export default BooksList;
