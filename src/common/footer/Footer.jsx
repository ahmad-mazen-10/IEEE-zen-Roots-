import { Link } from 'react-router-dom';
import './footer.css'
import { facebook, instagram, twitter, zenRooteLogo } from '../../assets';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <Link to="/" className="logo">
              <img src={zenRooteLogo} alt="zenRooteLogo" />
              <h5>Zen Roots</h5>
            </Link>
            <p>
              Your mental health is Link priority. Your happiness is an
              essential. Your self-care is Link necessity.{" "}
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h3>Privacy & Policy</h3>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link to="/">Meditation</Link>
                </li>
                <li>
                  <Link to="/">Keep Track</Link>
                </li>
                <li>
                  <Link to="/">Reduce Stress</Link>
                </li>
                <li>
                  <Link to="/">Improve Sleep</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Follow Us</h3>
              <ul className="socialMedia">
                <Link to="/" className='media'>
                  <img src={facebook} alt="facebook" />
                  <p>Fakcebook</p>
                </Link>
                <Link to="/" className='media'>
                  <img src={twitter} alt="Twitter" />
                  <p>Twitter</p>
                </Link>
                <Link to="/" className='media'>
                  <img src={instagram} alt="Instagram" />
                  <p>Instagram</p>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Design with love © 2024. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer