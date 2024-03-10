import React from 'react';
import ImageTitle from './ImageTitle';
import guitar from './guitar.png';
import climbing from './climbing.png';


function SportAndMusic() {
    const title = 'I have recently started playing the electric guitar, just three weeks ago. Despite being a beginner, I am excited to announce that you can anticipate my new song, which will be available on my website this time next year.';
    const title2 = 'I enjoy climbing.';

    return (
        <div className="home">
          <p>
          <ImageTitle image={guitar} title={title} />             
          <ImageTitle image={climbing} title={title2} />             
          </p>
        </div>
    );
}

export default SportAndMusic;
