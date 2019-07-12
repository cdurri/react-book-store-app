import React, { Component } from 'react';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

class BooksSearch extends Component {
  /*state = {

  }*/

  // pass the state from App.js to props for this 

  render() {
    return (
      <div className='search-books'>
        <BooksSearchBar />
        <BooksSearchResults/>
      </div>
    )
  }
}

export default BooksSearch;
