import React from 'react';
import Book from './Book';

const BookShelfBooks = props => (
  <div className='bookshelf-books'>
    <ol className='books-grid'>
      <Book />
      <Book />
    </ol>
  </div>
)

export default BookShelfBooks;
