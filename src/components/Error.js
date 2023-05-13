import React from 'react';
import {Link} from 'react-router-dom';
import './Bableshaz.css';
import Footer from './Footer';
export default function Error() {

  return (
    <>
    <div className='lalitt'>
      <h2>Sorry :( 404 page not found</h2>
      <Link to="/">Go to Home page</Link>
    </div>
    <Footer/>
    </>
  )
}
