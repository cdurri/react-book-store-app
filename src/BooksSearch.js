import React, { Component } from 'react';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

class BooksSearch extends Component {
  render() {
    return (
      <div className='search-books'>
        <BooksSearchBar />
        <BooksSearchResults />
      </div>
    )
  }
}

export default BooksSearch;
