import React from 'react';
import "./ImageTitle.css";

const ImageTitle = ({ image, title }) => {
  return (
    <div className="image-title-container">
      <img className="image" src={image} alt={title} />
      <div className="title-container">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ImageTitle;
