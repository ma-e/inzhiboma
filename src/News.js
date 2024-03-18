import React from 'react';
import zhiboma from './ZHIBOMA.png';
import ImageTitle from './ImageTitle';

function News() {
  const content = "Hello everyone, I am Zhibo who is passionate about mathematics, computer science, drawing, reading and writing. I am the founder of Zhibo education LLC, a company based in Fremont, California focusing on global education. Apart from managing my company,  I am also an author. My children's book, The Girl and Time, is available on Amazon for those interested. At schooI, I am participating in computer science club , delving into the fascinating world of coding and technology.  In my free time, I enjoyed electric guitar, running and climbing.";
  const title = "Zhibo Ma";
  return (
    <div className="home">
            <ImageTitle image={zhiboma} title={title} content={content} />
    </div>
  );
}

export default News;
