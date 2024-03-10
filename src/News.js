import React from 'react';
import zhiboma from './ZHIBOMA.png';
import ImageTitle from './ImageTitle';

function News() {
  const title = "Hello everyone, my name is Zhibo Ma. I am a student at Mission San Jose High School. I am passionate about computer science, mathematics, drawing, and writing. I am the founder of Z LLC, a company in the education sector. My debut book, Time and Girls, is available on Amazon.com. I am currently expanding my skills with Unity Engine through participation in my school's CS club. In my free time, I dedicate myself to practicing electric guitar and engaging in physical activities such as running and occasionally rock climbing.";
  return (
    <div className="home">
            <ImageTitle image={zhiboma} title={title} />
    </div>
  );
}

export default News;
