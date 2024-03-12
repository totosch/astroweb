import './BottomBar.css';
import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <footer className="footer-container">
      <div className="about-box">
        <h2>About</h2>
        <p>god, no?</p>
      </div>
      <div className="copyright-box">
        <h2>Copyright</h2>
        <p>1997-2024, Totinho</p>
      </div>
      <div className="Socials-box">
        <h2>Socials</h2>
        <div className="nav-links">
        <Link to="https://www.instagram.com/roschillaci_" className="nav-link">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;