import React, { useEffect, useRef } from 'react';
import './home.css';
import video from './back.mp4';
import { texts } from './Text';
import Testimonial from './Testimonial';
import Services from './services';
import InternshipPage from './InternshipPage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const typingRef = useRef('');
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let typingTimeout;

    const typeText = () => {
      const text = texts[textIndex];
      if (charIndex < text.length) {
        const { fragment, style } = text[charIndex];
        const span = document.createElement('span');
        span.style.color = style.color;
        span.textContent = fragment;
        if (typingRef.current) {
          typingRef.current.appendChild(span);
        }
        charIndex++;
        typingTimeout = setTimeout(typeText, 100); // Adjust the typing speed here
      } else {
        clearTimeout(typingTimeout);
        setTimeout(eraseText, 1500); // Wait 1.5 seconds before erasing the text
      }
    };

    const eraseText = () => {
      const currentRef = typingRef.current; // Create a local variable
      if (charIndex > 0) {
        if (currentRef) {
          // Use the local variable in the cleanup function
          currentRef.removeChild(currentRef.lastChild);
        }
        charIndex--;
        typingTimeout = setTimeout(eraseText, 100); // Adjust the erasing speed here
      } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
        setTimeout(typeText, 500); // Wait 0.5 seconds before typing the next text
      }
    };

    typeText();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typingRef]);

  return (
    <>
      <section>
        <div className='container'>
          <video className='video-background' autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
          <div className='content'>
            <h1>
              <span className='highlight-green'>C</span>
              ode<span className='highlight-red'>G</span>en{' '}
              <span className='highlight-green'>Technologies</span>, <br />
              <span className='typing-text' ref={typingRef}></span>
            </h1>
            <p className='description'>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting
            </p>
          </div>
        </div>
        <div className='button-container'>
          <button
            className='button'
            onClick={() => handleButtonClick('/aboutus')}
          >
            <i className='fas fa-info-circle'></i> About Us
          </button>
          <button
            className='button'
            onClick={() => handleButtonClick('/contact')}
          >
            <i className='fas fa-envelope'></i> Contact Us
          </button>
        </div>
      </section>
      <div style={{ backgroundColor: '#fff' }}>
        <Services />
        <InternshipPage />
        {/* <CourseDetails /> */}
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
