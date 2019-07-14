import React from 'react';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

const BooksSearch = ({ search, books, shelfupdate }) => (
  <div className='search-books'>
    <BooksSearchBar search={search} />
    <BooksSearchResults books={books} shelfupdate={shelfupdate} />
  </div>
)

export default BooksSearch;
