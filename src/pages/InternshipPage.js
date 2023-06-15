import React, { useEffect, useState } from 'react';
import './Internship.css';
import javaLogo from '../assets/java-logo.png';
import pythonLogo from '../assets/python-logo.jpeg';
import webDevLogo from '../assets/web-dev-logo.jpeg';
import background from '../assets/coures-back.png';
import { useNavigate } from 'react-router-dom';

const InternshipPage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const enrollInCourse = (course) => {
    navigate(`/coursedetals/${course.title}`);
  };
  const courses = [
    {
      title: 'JAVA FULL STACK',
      logo: javaLogo,
      description: 'Learn full stack development with Java.',
    },
    {
      title: 'PYTHON FULL STACK',
      logo: pythonLogo,
      description: 'Master full stack development with Python.',
    },
    {
      title: 'MERN STACK',
      logo: webDevLogo,
      description: 'Build modern websites with HTML, CSS, and JavaScript.',
    },
  ];

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsActive(entry.isIntersecting);

      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsActive(false);
        }, 3000);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const internshipSection = document.getElementById('Internship-Page');

    if (internshipSection) {
      observer.observe(internshipSection);
    }

    return () => {
      if (internshipSection) {
        observer.unobserve(internshipSection);
      }
    };
  }, []);

  return (
    <div className='internship-page' id='Internship-Page'>
      <section className='our-internship'>
        <h2 className='custom-heading'>Our Internship</h2>
        <div className='courses-container'>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card ${isActive ? 'card-animation' : ''}`}
            >
              <div
                className='background-image'
                style={{ cursor: 'pointer' }}
                onClick={() => enrollInCourse(course)}
              >
                <img src={background} alt='' srcSet='' />
                <div className='course-logo hexagon-wrapper'>
                  <img src={course.logo} alt={course.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
