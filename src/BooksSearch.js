import React from 'react';
import PropTypes from 'prop-types';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

const BooksSearch = ({ search, books, shelfupdate, value, selectupdate }) => (
  <div className='search-books'>
    <BooksSearchBar search={search} />
    <BooksSearchResults books={books} shelfupdate={shelfupdate} value={value} selectupdate={selectupdate} />
  </div>
)

BooksSearch.propTypes = {
  search: PropTypes.func,
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksSearch;
