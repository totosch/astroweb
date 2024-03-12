import { useState } from 'react';
import './Gallery.css';

interface GalleryImages {
    image: string;
    title: string;
}

const Gallery = ({ image, title }: GalleryImages) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="gallery-container">
            <div>
                <h3>{title}</h3>
                <img
                    src={image}
                    alt={title}
                    className="gallery-image"
                    onClick={handleImageClick}
                />
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <h3>{title}</h3>
                        <img
                            src={image}
                            alt={title}
                            className="modal-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
