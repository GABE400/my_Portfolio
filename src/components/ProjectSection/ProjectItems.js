import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/projectImg.png';
import './Projects.css';

const ProjectItems = () => {
  return (
    <div className='projectsImgItems'>
      <Link to='/projects' className='projectItemImg'>
        <img src={projectImg} alt='project img' />
      </Link>
      <div className='projectName_info'>
        <Link to='#'>
          <h3 className='projectTitle'>Project 1</h3>
          <p className='projectItem_desc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
