import React from 'react';
import BooksSearchClose from './BooksSearchClose';
import BooksSearchInput from './BooksSearchInput';

const BooksSearchBar = ({ search }) => (
  <div className='search-books-bar'>
    <BooksSearchClose />
    <BooksSearchInput search={search} />
  </div>
)

export default BooksSearchBar;
