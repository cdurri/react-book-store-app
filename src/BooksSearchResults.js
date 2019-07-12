import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const BooksSearchResults = props => (
  <div className='search-books-results'>
  {console.log(props)}
    <ol className='books-grid'>
      { props.books.length > 0 && (
        props.books.map(book => {
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
      }))
    }
    </ol>
  </div>
)

export default BooksSearchResults;
