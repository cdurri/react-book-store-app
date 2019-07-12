import React, { Component } from 'react';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

const BooksSearch = props => (
  // pass the state from App.js to props for this
  <div className='search-books'>
    <BooksSearchBar search={props.search} />
    <BooksSearchResults books={props.books} />
  </div>
)

export default BooksSearch;
