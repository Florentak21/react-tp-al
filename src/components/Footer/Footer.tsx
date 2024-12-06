import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer h-[500px]">
      <div className="footer-content">
        <div className="footer-section about text-[#F5F5F5]">
          <h3 className='font-montserrat text-[21px] leading-[70px]'>ABOUT</h3>
          <p className='font-libre text-[15px] leading-[24px]'>
            Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Pellentesque in
            ipsum id orci porta dapibus. Sed porttitor lectus nibh.
          </p>
        </div>
        <div className="footer-section social">
          <h3 className=' font-montserrat text-[21px] leading-[70px]'>SOCIAL</h3>
          <div className="social-icons flex">
            <Link
              to="/"
              className="inline-block bg-white hover:bg-black hover:text-white w-1/12 text-black"
            >
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </Link>
            <Link
              to="/"
              className="inline-block bg-white hover:bg-black hover:text-white w-1/12 text-black"
            >
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Link>
            <Link
              to="/"
              className="inline-block bg-white hover:bg-black hover:text-white w-1/12 text-black"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </Link>
            <Link
              to="/"
              className="inline-block bg-white hover:bg-transparent hover:text-white w-1/12 text-black"
            >
              <FontAwesomeIcon icon={faPinterest} size="1x" style={{ color: 'inherit' }} />
            </Link>
          </div>
        </div>
        <div className="footer-section contact">
          <h3 className=' font-montserrat text-[21px] leading-[70px]'>CONTACT US</h3>
          <address className='font-libre text-[15px] leading-[24px]'>
            500 Terry Francois St.<br />
            San Francisco, CA 94158<br />
            +1-410-555-0134 | info@example.com<br />
            contact@example.com
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='font-libre text-[15px] leading-[24px]'>
          Copyright © 2024 Home Decor | Powered by Home Decor
        </p>
        <nav className='font-libre text-[15px] leading-[24px]'>
          <Link to="/about-us" className='hover:no-underline'>About Us</Link>
          <Link to="/living-room" className='hover:no-underline'>Living Room</Link>
          <Link to="/kitchen" className='hover:no-underline'>Kitchen</Link>
          <Link to="/outdoors" className='hover:no-underline'>Outdoors</Link>
          <Link to="/contact" className='hover:no-underline'>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
