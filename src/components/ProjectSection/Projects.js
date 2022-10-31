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
import styled from 'styled-components';

const ProjectSectionStyle = styled.div`
  .allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #333;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: gray;
    border-radius: 8px;
    outline: none;
    padding: 10px;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768) {
    .allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
    }
  }
`;

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <ProjectSectionStyle>
        <div className='container'>
          <p>some of my recent works</p>
          <h2>Projects</h2>
          <div className='allItems'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
            >
              {projects.map((project, index) => {
                // eslint-disable-next-line array-callback-return
                if (index >= 5) return;
                return (
                  <div className='swiper mySwiper'>
                    <div className='swiper-wrapper'>
                      <SwiperSlide key={project.id}>
                        <ProjectItems
                          title={project.name}
                          img={project.img}
                          desc={project.desc}
                        />
                      </SwiperSlide>
                      <div className='swiper-button-next'></div>
                      <div className='swiper-button-prev'></div>
                    </div>
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
      </ProjectSectionStyle>
    </section>
  );
};

export default Projects;
