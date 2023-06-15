import React from 'react';
import './About.css';
import logo1 from '../assets/Aboutlogo1.jpeg';
import logo2 from '../assets/Aboutlogo2.jpeg';
import logo3 from '../assets/Aboutlogo3.jpg';
import logo4 from '../assets/Aboutlogo4.png';

const AboutUsPage = () => {
  return (
    <div className='about-us-page'>
      <div className='about-section'>
        <div className='about-details'>
          <h2>About Us</h2>
          <p>UX & quality-focused digital engineering company</p>
        </div>
      </div>
      <div className='info-section'>
        <div style={{ width: '70%' }}>
          <h3>Who we are?</h3>
          <p>
            Coditas is a User Experience & quality-focused digital engineering
            company that enables enterprises to build and run cutting-edge
            digital business models. Backed by a team of 900+ passionate
            engineers and designers, we constitute an engineering-driven,
            people-first culture and are a certified Great Place To Work. We
            have been providing quality solutions to multi-billion dollar brands
            across the globe, including JPMC, HDFC, DMart, Symantec, and more.
            With steadfast philosophies around writing clean code and designing
            intuitive user experiences, Coditas has experienced 50% YOY growth,
            the current best in the software service industry.
          </p>
        </div>

        <div className='tags-container'>
          <div className='tag'>
            <img src={logo1} alt='Logo 1' />
            <p>Intuitive </p>

            <h6>User Experience</h6>
          </div>
          <div className='tag'>
            <img src={logo2} alt='Logo 2' />
            <p>Scalable</p>
            <h6>Web and Mobile Apps</h6>
          </div>
          <div className='tag'>
            <img src={logo3} alt='Logo 3' />
            <p>Young</p>
            <h6>Leadership</h6>
          </div>
          <div className='tag'>
            <img src={logo4} alt='Logo 4' />
            <p>Product</p>
            <h6>Development</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
