import { Link } from 'react-router-dom';
import './TopBar.css';

interface TopBarProps {
    image: string;
  }

  const TopBar = ({ image }: TopBarProps) => {
    return (
      <div className="top-bar">
        <img src={image} className="activity-image" />
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link> 
          <Link to="/equipment" className="nav-link">Equipment</Link>
          <Link to="/targets" className="nav-link">Targets</Link>
        </div>
      </div>
    );
  };

export default TopBar;