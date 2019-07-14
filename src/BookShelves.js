import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookShelves = ({ shelves, shelfkeys, books, shelfupdate }) => (
  <div className='list-books-content'>
    <BookShelf shelves={shelves} shelfkeys={shelfkeys} books={books} shelfupdate={shelfupdate} />
  </div>
)

BookShelves.propTypes = {
  shelves: PropTypes.array.isRequired,
  shelfkeys: PropTypes.array.isRequired,
  books: PropTypes.object.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BookShelves;
