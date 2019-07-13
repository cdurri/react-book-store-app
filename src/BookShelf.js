import React from 'react';
import Book from './Book';

const BookShelf = props => (
  <div>
    {props.shelves.map((shelf, index) => {
      return (
        <div className='bookshelf' id={props.shelfkeys[index]}>
          <h2 className='bookshelf-title'>{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book shelf={shelf} shelfkey={props.shelfkeys[index]} books={props.books} shelfupdate={props.shelfupdate} />
            </ol>
          </div>
        </div>
      )
    })}
  </div>
)

export default BookShelf;
