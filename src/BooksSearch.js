import React from 'react';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

const BooksSearch = props => (
  <div className='search-books'>
    <BooksSearchBar search={props.search} />
    <BooksSearchResults books={props.books} shelfupdate={props.shelfupdate} />
  </div>
)

export default BooksSearch;
