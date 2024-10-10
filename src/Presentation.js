import React, { useState } from 'react';
import More from './More';
import './App.css';

function Presentation({ language = {} }) {
  const presentationTitle = language.title || '';
  const presentationText = language.presentation || '';
  const [readMore, setReadMore] = useState(false);

  // Check if presentationText is empty and log the error
  let displayText = presentationText.trim();
  if (!displayText) {
    console.log(
      "Error: The 'presentationText' property in the 'language' prop is empty or undefined."
    );
    displayText = 'It seems like there is no data to be shown here.';
  }

  return (
    <article className='presentation-container-data'>
      <h1 className='title-data'>{presentationTitle}</h1>
      <p className='presentaition-data'>{displayText}</p>
      {readMore && <More text={language.readMore} />}
      <button
        className='read-more-button'
        onClick={() => setReadMore((prevState) => !prevState)}
      >
        {
          /* TODO: Change the language of the button according to the language prop */ readMore
            ? 'Read less...'
            : 'Read more...'
        }
      </button>
    </article>
  );
}

export default Presentation;
