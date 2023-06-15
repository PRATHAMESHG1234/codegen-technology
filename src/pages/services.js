import React from 'react';
import './Services.css'; // Import custom CSS file for styling
import {
  FaCode,
  FaDatabase,
  FaCodeBranch,
  FaPalette,
  FaExchangeAlt,
  FaRocket,
  FaBug,
  FaShieldAlt,
  FaTasks,
} from 'react-icons/fa'; // Import required React Icons

const Services = () => {
  const services = [
    {
      title: 'Full Stack Web Development',
      description:
        'Learn to build dynamic and responsive web applications using a combination of front-end and back-end technologies',
      icon: <FaCode />,
    },
    {
      title: 'Database Management and Integration',
      description:
        'Master the skills to design and manage databases, and integrate them with web applications',
      icon: <FaDatabase />,
    },
    {
      title: 'Version Control and Collaboration',
      description:
        'Gain expertise in using version control systems like Git and collaborate effectively with other developers',
      icon: <FaCodeBranch />,
    },
    {
      title: 'UI/UX Design and Development',
      description:
        'Learn the principles of user interface and user experience design and implement them in web development projects',
      icon: <FaPalette />,
    },
    {
      title: 'API Development and Integration',
      description:
        'Explore the concepts of building and integrating APIs to enable communication between different software applications',
      icon: <FaExchangeAlt />,
    },
    {
      title: 'Deployment and DevOps',
      description:
        'Learn the process of deploying web applications and implementing DevOps practices for efficient development and deployment',
      icon: <FaRocket />,
    },
    {
      title: 'Testing and Debugging',
      description:
        'Master the techniques of testing and debugging web applications to ensure their functionality and performance',
      icon: <FaBug />,
    },
    {
      title: 'Security and Authentication',
      description:
        'Understand the importance of web application security and learn to implement authentication and authorization mechanisms',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Project Management and Agile Development',
      description:
        'Acquire project management skills and learn to follow Agile methodologies for efficient software development',
      icon: <FaTasks />,
    },
  ];

  // Add more services as needed

  return (
    <div className='services-container' id='services'>
      <h2 className='custom-services-heading'>All Services</h2>
      <div className='cards-container'>
        {services.map((service, index) => (
          <div key={index} className='card'>
            <div className='services-icon'>
              {React.cloneElement(service.icon, { color: '#007bff', size: 30 })}
            </div>
            {/* Display the React Icon */}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
