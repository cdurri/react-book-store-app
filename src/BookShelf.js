import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ shelves, shelfkeys, books, shelfupdate }) => (
  <div>
    {shelves.map((shelf, index) => {
      return (
        <div className='bookshelf' id={shelfkeys[index]}>
          <h2 className='bookshelf-title'>{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book shelf={shelf} shelfkey={shelfkeys[index]} books={books} shelfupdate={shelfupdate} />
            </ol>
          </div>
        </div>
      )
    })}
  </div>
)

BookShelf.propTypes = {
  shelves: PropTypes.array.isRequired,
  shelfkey: PropTypes.string.isRequired,
  books: PropTypes.object.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BookShelf;
