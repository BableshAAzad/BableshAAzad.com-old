import React from 'react';
import {Link} from 'react-router-dom';
import './Header11.css';

export default function Footer() {
  return (
    <>
      <div className='container'>
        <footer className='footer'>
          <hr />
          <p>BableshAAzad.com © 2023 &nbsp;
            <a href="/" target="_blank">Terms</a> &nbsp;|&nbsp;
            <a href="/" target="_blank">Site Privacy policy</a> &nbsp;|&nbsp;
            <Link to="/about">About</Link>&nbsp;|&nbsp;
            <a href="mailto:bableshaazad@outlook.com" target="_blank" rel="noopener noreferrer">Advertise</a> </p>
          <hr />
        </footer>
       </div>
    </>
  )
}
