import React from 'react';
import spinner from '../../assets/img/spinner.gif';

const Spinner = () => {
  return (
    <div className='restaurants__spinner'>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner;