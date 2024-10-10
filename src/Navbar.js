import React from 'react';
import './App.css';
import Flags from './flags';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

// TODO: Consider changing the icons to use Iconify
// https://iconify.design/docs/icon-components/react/

function Navbar({ setLanguage }) {
  return (
    <header className='navbar-data'>
      <div className='icons-data'>
        <FaGithubSquare
          className='icon-data'
          onClick={() =>
            window.open('https://github.com/snoozleEmily', '_blank')
          }
        />
        <FaLinkedin
          className='icon-data'
          onClick={() =>
            window.open('https://www.linkedin.com/in/emily-alvim/', '_blank')
          }
        />
      </div>
      <div className='flags-container'>
        <Flags setLanguage={setLanguage} />
      </div>
    </header>
  );
}

export default Navbar;
