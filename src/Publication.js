import React from 'react';
import ImageTitle from './ImageTitle';
import book from './book.png';

function Publication() {
    const imageUrl = 'https://your-image-url.com/image.jpg';
    const title = 'The Time And Girl';
    return (
      <div className="home">
      <ImageTitle image={book} title={title} />        
      </div>
    );
}

export default Publication;
