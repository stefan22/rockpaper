import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/not-found.scss';

const NotFound = () => (

  <div className='not-found'>
    <h2 className='not-found-title'>Page Not Found</h2>
    <Link className='not-found-link' to='/'>Back to Homepage</Link>
  </div>

);


export default NotFound;
