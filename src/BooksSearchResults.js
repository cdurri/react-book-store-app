import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const BooksSearchResults = ({ books, shelfupdate }) => (
  <div className='search-books-results'>
    <ol className='books-grid'>
      {books.length > 0 && (
        books.map(book => {
        return (
          <li>
            <div className='book'>
              <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <BookShelfChanger books={book} shelfupdate={shelfupdate} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        )
      }))
    }
    </ol>
  </div>
)

export default BooksSearchResults;
