import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props  => (
  props.books.filter(book => book.shelf === props.shelfkey)
  .map(book => {
    console.log(props.shelfkey)
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <BookShelfChanger />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  })
)

export default Book;
