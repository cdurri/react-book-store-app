import React, { Component } from 'react';

class BooksSearchClose extends Component {
  render() {
    return (
      <button className='close-search' onClick={() => this.setState({ showSearchPage: false })}>Close</button>
    )
  }
}

export default BooksSearchClose;
