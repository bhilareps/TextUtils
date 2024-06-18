import React from 'react';
import '../App.css'; // Optional: for styling

const Footer = () => {
  return (
    <footer className="footerz">
      <div className="footer-content">
        <p>&copy; 2024 TextUtils. Made with Love!</p> 
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

