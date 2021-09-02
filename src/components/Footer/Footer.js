import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer>
      <p>Created with ❤️ by Amrit.</p> 
      <p>Cosmo © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;
