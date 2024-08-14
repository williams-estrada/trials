import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="proj-imgbx" style={{ textAlign: 'center' }}>
        <img src={imgUrl} alt={title} style={{ width: '100%', height: 'auto', maxWidth: '600px', margin: '0 auto' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  )
}
