import './App.css';
import React from 'react';

function More({ text: continuationText }) {
  return (
    <div className='read-more-text presentaition-data'>{continuationText}</div>
  );

  // TODO: Map the possibility of adding images, videos, and maybe animations.
}

export default More;
