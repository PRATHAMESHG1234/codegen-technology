import React, { useEffect, useState, useRef } from 'react';
import './home.css';
import video from './back.mp4';
import Testimonial from './Testimonial';
import Services from './services';
import InternshipPage from './InternshipPage';
import { texts } from './Text';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const typedTextRef = useRef('');

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let typingTimeout;
    let eraseTimeout;

    const typeText = () => {
      const text = texts[textIndex];
      const fragmentObj = text[charIndex];

      if (fragmentObj) {
        const { text: fragment } = fragmentObj;

        const mergedFragment = fragment;
        const typedTextSoFar = typedTextRef.current + mergedFragment;

        setTypedText(typedTextSoFar);
        typedTextRef.current += mergedFragment;

        charIndex++;

        if (charIndex < text.length) {
          const typingDelay = getRandomDelay(50, 150); // Generate a random delay between 50ms and 150ms
          typingTimeout = setTimeout(typeText, typingDelay);
        } else {
          clearTimeout(typingTimeout);
          eraseTimeout = setTimeout(eraseText, 1500); // Wait 1.5 seconds before erasing the text
        }
      }
    };

    const eraseText = () => {
      if (typedTextRef.current.length > 0) {
        const newText = typedTextRef.current.slice(0, -1);
        setTypedText(newText);
        typedTextRef.current = newText;
        eraseTimeout = setTimeout(eraseText, 50); // Adjust the erasing speed here
      } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
        typingTimeout = setTimeout(typeText, 500); // Wait 0.5 seconds before typing the next text
      }
    };

    const getRandomDelay = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    typeText();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(eraseTimeout);
    };
  }, []);

  const getFragmentStyle = (index, textIndex) => {
    const fragmentObj = texts[textIndex][index];
    if (fragmentObj) {
      const { style } = fragmentObj;
      return style || {};
    }
    return {};
  };

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
              <span className='typing-text'>
                {typedText.split('').map((char, index) => (
                  <span key={index} style={getFragmentStyle(index, 0)}>
                    {char}
                  </span>
                ))}
              </span>
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
