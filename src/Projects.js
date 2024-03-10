import React from 'react';
import ImageTitle from './ImageTitle';
import resume from './resume.png';



function Projects() {
    const title = 'This is my resume.';
    return (
        <div className="home">
          <p>
          <ImageTitle image={resume} title={title} />        
            </p>
        </div>
    );
}

export default Projects;
