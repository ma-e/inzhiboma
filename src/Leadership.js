import React from 'react';
import z from './z.png';
import ImageTitle from './ImageTitle';

function Leadership() {
    const title = "Zhibo Education";
    const subTitle = "2024 - Present";
    const content = "Zhibo Education is committed to supporting students whose first language is not English. Currently, our team consists of 8 members located in cities across the United States and China. I am dedicated to creating a positive impact in the field of education.";
    return (
        <div className="home">
          <p>
              <ImageTitle image={z} title={title} subTitle={subTitle} content={content}/>        
            </p>
        </div>
    );
}

export default Leadership;
