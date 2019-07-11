import React from 'react';
import BookShelfBooks from './BookShelfBooks';

const BookShelf = props => (
  <div>
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Currently Reading</h2>
      <BookShelfBooks />
    </div>
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <BookShelfBooks />
    </div>
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Read</h2>
      <BookShelfBooks />
    </div>
  </div>
)

export default BookShelf;
