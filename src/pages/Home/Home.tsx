import React from 'react';
import './Home.css';
import { ROUTES } from '../../constants';
import TargetsBackground from '../../assets/home/target-bg.jpg';
import EquipmentBackground from '../../assets/home/telescope-bg.jpg';
import HomeBackground from '../../assets/home/home-bg.jpg';
import Options from '../../components/Options/Options';

const options = [
  { image: EquipmentBackground, title: 'Equipment', url: ROUTES.EQUIPMENT },
  { image: TargetsBackground, title: 'Targets', url: ROUTES.TARGETS }
];

const Home: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="home-container">
      <div className="home-image-section">
        <img src={HomeBackground} className="home-image" alt="Home Background" />
        <div className="home-image-content">
          <h1 className="home-title">Astronomy</h1>
        </div>
      </div>
      <div className="subtitle-text">
        <h2>Home of the Human Knowledge</h2>
      </div>
      <div className="button-container">
        <button className="home-button" onClick={handleScrollDown}></button>
      </div>
      <div className="options-container">
        {options.map((options) => (
          <Options image={options.image} title={options.title} url={options.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;