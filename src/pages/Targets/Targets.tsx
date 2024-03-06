import './Targets.css';

import M31Background from '../../assets/targets/m31-bg.jpg';
import M42Background from '../../assets/targets/m42-bg.jpg';
import M51Background from '../../assets/targets/m51-bg.jpg';
import M106Background from '../../assets/targets/m106-bg.jpg';
import RingNebulaBackground from '../../assets/targets/ring-nebula-bg.jpg';

import Gallery from '../../components/Gallery/Gallery';

const images = [
    { image: M31Background },
    { image: M42Background },
    { image: M51Background },
    { image: M106Background },
    { image: RingNebulaBackground }
];

const Targets = () => {
    return (
        <div className="targets-container">
            <div className="targets-image-section">
                <img src={M106Background} className="targets-image" />
                <div className="targets-image-content">
                    <h1 className="targets-title">Targets</h1>
                </div>
            </div>
            <div className="gallery-container">
                {images.map((image) => (
                    <Gallery image={image.image} />
                ))}
            </div>
        </div>
    );
};

export default Targets;
