import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSearchClose extends Component {
  render() {
    return (
      <Link to='/'>
        <button className='close-search'>Close</button>
      </Link>
    )
  }
}

export default BooksSearchClose;
