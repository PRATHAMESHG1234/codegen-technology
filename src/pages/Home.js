import React, { useEffect, useState } from 'react';
import './home.css';
import video from './back.mp4';
import Testimonial from './Testimonial';
import Services from './services';
import InternshipPage from './InternshipPage';
import { texts } from './Text';

const Home = () => {
  const [typedText, setTypedText] = useState([]);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let typingTimeout;
    let eraseTimeout;

    const typeText = () => {
      const text = texts[textIndex];
      let style = {}; // Declare the style variable here
      let mergedFragment = '';

      for (let i = 0; i <= charIndex; i++) {
        if (text[i]) {
          mergedFragment += text[i].text;
          style = text[i].style;
        }
      }

      const typedTextSoFar = [...typedText, { text: mergedFragment, style }];

      setTypedText(typedTextSoFar);

      charIndex++;

      if (charIndex < text.length) {
        const typingDelay = getRandomDelay(50, 150); // Generate a random delay between 50ms and 150ms
        typingTimeout = setTimeout(typeText, typingDelay);
      } else {
        clearTimeout(typingTimeout);
        eraseTimeout = setTimeout(eraseText, 50); // Adjust the erasing speed here

        // Add your desired logic here when typing is complete
      }
    };

    const eraseText = () => {
      if (typedText.length > 0) {
        const newText = typedText.slice(0, -1);
        setTypedText(newText);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {typedText.map((fragment, index) => (
                  <span key={index} style={fragment.style}>
                    {fragment.text}
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
