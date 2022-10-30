import React from 'react';
import './Projects.css';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import projects from '../../assets/data/projects';
import ProjectItems from './ProjectItems';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <p>some of my recent works</p>
        <h2>My Projects</h2>
        <div className='allItems'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            className='mySwiper '
          >
            {projects.map((project, index) => {
              // eslint-disable-next-line array-callback-return
              if (index >= 5) return;
              return (
                <div className='swiper-wrapper'>
                  <SwiperSlide key={project.id}>
                    <ProjectItems />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
        <Link
          className='button'
          to='contact'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        >
          Hire Me
        </Link>
      </div>
    </section>
  );
};

export default Projects;
