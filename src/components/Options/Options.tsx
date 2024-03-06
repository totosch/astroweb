import { Link } from 'react-router-dom';
import './Options.css';

interface OptionsProps {
  image: string;
  title: string;
  url: string;
}

const Options = ({ image, title, url }: OptionsProps) => {
  return (
    <div className="options-container">
      <Link to={url} className="options-square">
        <img src={image} alt={title} className="options-image" />
        <h2 className="options-title">{title}</h2>
      </Link>
    </div>
  );
};

export default Options;