import React from 'react';
import z from './z.png';
import ImageTitle from './ImageTitle';

function Leadership() {
    const title = 'I am the founder of Z LLC, a company dedicated to assisting students whose native language is not English. Currently, our focus is on serving Chinese-speaking students at our initial stage. However, our vision extends beyond this, as we aim to broaden our support to benefit a wider audience in the future.';
    return (
        <div className="home">
          <p>
              <ImageTitle image={z} title={title} />        
            </p>
        </div>
    );
}

export default Leadership;
