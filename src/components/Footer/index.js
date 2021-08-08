import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer>
      <p>Developed & Designed by Amrit.</p> 
      <p>cosmo.com © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;
