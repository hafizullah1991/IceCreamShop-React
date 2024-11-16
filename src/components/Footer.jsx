import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import FooterIcons from './FooterIcons';


function renderSocialLink(social, index) {
  return (
      <li key={index}>
          <a href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={social.icon} />
              <span>{social.name}</span> {/* Displaying the name next to the icon */}
          </a>
      </li>
  );
}

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-content">
              <div className="social-media">
                  <h3>Follow Us</h3>
                  <ul>
                      {FooterIcons.map(renderSocialLink)}
                  </ul>
              </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Ice Cream Shop. All Rights Reserved.</p>
      </footer>
  );
};
export default Footer;
