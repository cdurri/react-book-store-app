import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = ({ shelves, shelfkeys, books, shelfupdate }) => (
  <div className='list-books-content'>
    <BookShelf shelves={shelves} shelfkeys={shelfkeys} books={books} shelfupdate={shelfupdate} />
  </div>
)

export default BookShelves;
