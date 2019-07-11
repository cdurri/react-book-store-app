import React from 'react';
import Book from './Book';

const BookShelf = props => (
  <div>
    {console.log(props.books)}
    {props.shelves.map(shelf => {
      return (
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book books={props.books} />
            </ol>
          </div>
        </div>
      )
    })}
  </div>
)

export default BookShelf;
