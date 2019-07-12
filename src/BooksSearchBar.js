import React from 'react';
import BooksSearchClose from './BooksSearchClose';
import BooksSearchInput from './BooksSearchInput';

const BooksSearchBar = props => (
  <div className='search-books-bar'>
    <BooksSearchClose />
    <BooksSearchInput search={props.search} />
  </div>
)

export default BooksSearchBar;
