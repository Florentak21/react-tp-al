import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer h-[500px]">
        <div className="footer-content">
        <div className="footer-section about">
          <h3>ABOUT</h3>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Pellentesque in
            ipsum id orci porta dapibus. Sed porttitor lectus nibh.
          </p>
        </div>
        <div className="footer-section social">
          <h3>SOCIAL</h3>
          <div className="social-icons flex">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-black hover:text-white w-1/12 text-black"
              >
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-black hover:text-white w-1/12 text-black"
              >
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-black hover:text-white w-1/12 text-black"
              >
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-transparent hover:text-white w-1/12 text-black"
              >
                <FontAwesomeIcon icon={faPinterest} size="1x" style={{ color: 'inherit' }} />
              </a>


          </div>
        </div>
        <div className="footer-section contact">
          <h3>CONTACT US</h3>
          <address>
            500 Terry Francois St.<br />
            San Francisco, CA 94158<br />
            +1-410-555-0134 | info@example.com<br />
            contact@example.com
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2024 Home Decor | Powered by Home Decor
        </p>
        <nav>
          <a href="#">About Us</a>
          <a href="#">Living Room</a>
          <a href="#">Kitchen</a>
          <a href="#">Outdoors</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
