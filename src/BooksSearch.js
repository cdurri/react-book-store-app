import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

class BooksSearch extends Component {
  state = {
    booksSearch: []
  }

  booksSearch = query => {
    if(query !== '') {
      BooksAPI.search(query).then(data => {
        this.setState({
          booksSearch: data
        })
      })
    } else {
      this.setState({
        booksSearch: []
      })
    }
  }

  render() {
    return (
      <div className='search-books'>
        <BooksSearchBar search={this.booksSearch} />
        <BooksSearchResults books={this.state.booksSearch} shelfupdate={this.props.shelfupdate} value={this.props.value} selectupdate={this.props.selectupdate} />
      </div>
    )
  }
}

BooksSearch.propTypes = {
  search: PropTypes.func,
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksSearch;
