import ExplorerBackground from "../../assets/equipment/150750.png";
import DobsonianBackground from "../../assets/equipment/dob200.png";
import EspiritBackground from "../../assets/equipment/espirit150.png";
import RingNebulaBackground from "../../assets/targets/ring-nebula-bg.jpg";

import Carousel from "../../components/Carousel/Carousel";

const images = [
  { image: ExplorerBackground, title: "Explorer 150" },
  { image: DobsonianBackground, title: "Dobsonian 200p" },
  { image: EspiritBackground, title: "Espirit 150ED" },
];

const Targets = () => {
  return (
    <div className="targets-container">
      <div className="targets-image-section">
        <img src={RingNebulaBackground} className="targets-image" />
        <div className="targets-image-content">
          <h1 className="targets-title">Equipment</h1>
        </div>
      </div>
      <div className="comment-text">
        <h2>Dream telescopes</h2>
      </div>
      <div className="carousel-container">
          <Carousel image={DobsonianBackground} title={"Explorer 150"}/>
      </div>      
    </div>
  );
};

export default Targets;