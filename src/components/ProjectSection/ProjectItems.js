import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/projectImg.png';
import './Projects.css';

const ProjectItems = ({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply text of the printing and typesetting industry',
}) => {
  return (
    <div className='projectsImgItems'>
      <Link to='/projects' className='projectItemImg'>
        <img src={img} alt='project img' />
      </Link>
      <div className='projectName_info'>
        <Link to='#'>
          <h3 className='projectTitle'>{title}</h3>
          <div className='projectItem_desc'>
            <p>{desc}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
