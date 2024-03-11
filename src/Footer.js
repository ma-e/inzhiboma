import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <a href="inzhiboma@gmail.com">inzhiboma@gmail.com</a>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="https://www.facebook.com/profile.php?id=61554584865974" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/inzhiboma/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://www.instagram.com/tnnd.g/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
