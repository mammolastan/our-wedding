import React from 'react';

interface ImageLinkProps {
    name: string;
    link: string;
    imageUrl: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ name, link, imageUrl }) => {
    return (
        <a href={link} className='image-link'>
            <img src={imageUrl} alt={name} />
            <span>
                {name}
            </span>
        </a>
    );
};

export default ImageLink;   