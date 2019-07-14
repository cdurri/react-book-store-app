import React from 'react';
import PropTypes from 'prop-types';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

const BooksSearch = ({ search, books, shelfupdate }) => (
  <div className='search-books'>
    <BooksSearchBar search={search} />
    <BooksSearchResults books={books} shelfupdate={shelfupdate} />
  </div>
)

BooksSearch.propTypes = {
  search: PropTypes.string,
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksSearch;
