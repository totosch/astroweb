import "./Equipment.css";

import ExplorerBackground from "../../assets/equipment/150750.png";
import DobsonianBackground from "../../assets/equipment/dob200.png";
import EspiritBackground from "../../assets/equipment/espirit150.png";

import RingNebulaBackground from "../../assets/equipment/eqring-nebula-bg.jpg";
import Carousel from "../../components/Carousel/Carousel";

const Equipment = () => {
  const images = [
    { image: ExplorerBackground },
    { image: DobsonianBackground },
    { image: EspiritBackground },
  ];

  return (
    <div className="equipment-container">
      <div className="equipment-image-section">
        <img src={RingNebulaBackground} className="equipment-image" />
        <div className="equipment-image-content">
          <h1 className="equipment-title">Equipment</h1>
        </div>
      </div>
      <div className="comment-text">
        <h2>Dream Telescopes</h2>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default Equipment;
