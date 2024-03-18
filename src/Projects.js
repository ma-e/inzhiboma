import React from 'react';
import ImageTitle from './ImageTitle';
import resume from './resume.png';

function Projects() {
    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          marginTop: '100px',
          marginBottom: '100px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img src={resume} alt="Resume" style={{
              maxWidth: '100%',
              maxHeight: '100%'
            }} />
          </div>
        </div>
      );
}

export default Projects;
