import React from 'react';
import "./ImageTitle.css";

const ImageTitle = ({ image, title, subTitle, content }) => {
  return (
    <div className="image-title-container">
      <img className="image" src={image} alt={title} />
      <div className="title-container">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <h3>{content}</h3>
      </div>
    </div>
  );
};

export default ImageTitle;
