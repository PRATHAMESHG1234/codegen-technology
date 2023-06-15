import React, { useEffect, useRef, useState } from 'react';
import './Internship.css'; // Import your custom CSS file for styling
import javaLogo from '../assets/java-logo.png';
import pythonLogo from '../assets/python-logo.jpeg';
import webDevLogo from '../assets/web-dev-logo.jpeg';
import background from '../assets/coures-back.png';
import { useNavigate } from 'react-router-dom';

const InternshipPage = () => {
  const navigate = useNavigate();
  const internshipRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const enrollInCourse = (course) => {
    navigate(`/coursedetals/${course.title}`); // Assuming the route is "/courses/:courseName"
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);

        // Set isActive to false immediately after it becomes true
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsActive(false);
          }, 3000);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (internshipRef.current) {
      observer.observe(internshipRef.current);
    }

    return () => {
      if (internshipRef.current) {
        observer.unobserve(internshipRef.current);
      }
    };
  }, []);

  return (
    <div className='internship-page' id='Internship-Page'>
      <section className='our-internship' ref={internshipRef}>
        <h2 className='custom-heading'>Our Internship</h2>
        <div className='courses-container'>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card  ${isActive ? 'card-animation' : ''}`}
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
