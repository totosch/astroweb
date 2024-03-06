import { useState } from 'react';
import './Gallery.css';

interface GalleryImages {
    image: string;
}

const Gallery = ({ image }: GalleryImages) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="gallery-container">
            <img
                src={image}
                alt="Gallery Image"
                className="gallery-image"
                onClick={handleImageClick}
            />

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img
                            src={image}
                            alt="Gallery Image"
                            className="modal-image"
                            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
