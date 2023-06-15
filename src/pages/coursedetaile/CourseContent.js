import React, { useState, useRef, useEffect } from 'react';
import './CourseContent.css';
import { courses } from './CourseContentData';

const CourseContent = ({ CourseName }) => {
  console.log(CourseName);
  const [filteredCourseData, setFilteredCourseData] = useState([]);

  useEffect(() => {
    const filteredData = courses.filter(
      (course) => course.course === CourseName
    );
    setFilteredCourseData(filteredData);
  }, [CourseName]);

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    setCourseData(filteredCourseData);
  }, [filteredCourseData]);
  const togglePoints = (topicIndex, moduleIndex) => {
    const updatedData = [...courseData];
    updatedData[topicIndex].modules[moduleIndex].isOpen =
      !updatedData[topicIndex].modules[moduleIndex].isOpen;
    setCourseData(updatedData);
  };

  const toggleModules = (topicIndex) => {
    const updatedData = [...courseData];
    updatedData[topicIndex].isOpen = !updatedData[topicIndex].isOpen;
    setCourseData(updatedData);
  };

  const getHeight = (element) => {
    return element.scrollHeight + 'px';
  };

  const PointsRef = useRef([]);

  const handleToggleTopic = (topicIndex) => {
    toggleModules(topicIndex);
  };

  const handleToggleModule = (topicIndex, moduleIndex) => {
    togglePoints(topicIndex, moduleIndex);

    const pointsElement = PointsRef.current[topicIndex]?.[moduleIndex];
    if (pointsElement && pointsElement.style.maxHeight) {
      pointsElement.style.maxHeight = null;
    } else if (pointsElement) {
      pointsElement.style.maxHeight = getHeight(pointsElement);
    }
  };

  return (
    <div className='course-content'>
      <h2>Course Content</h2>
      {courseData.map((topic, topicIndex) => (
        <div
          key={topicIndex}
          className={`module ${topic.isOpen ? 'open' : ''}`}
        >
          <div
            className='module-header'
            onClick={() => handleToggleTopic(topicIndex)}
          >
            <div className='icon'>
              <i className='fas fa-angle-right'></i>
            </div>
            <h2>{topic.title}</h2>
          </div>
          {topic.modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className={`sub-module `}>
              <div
                className='sub-module-header'
                onClick={() => handleToggleModule(topicIndex, moduleIndex)}
              >
                <div className='icon'>
                  <i className='fas fa-angle-right'></i>
                </div>
                <h3>{module.title}</h3>
              </div>
              <div
                className={`points ${module.isOpen ? 'open' : ''}`}
                style={{ maxHeight: '100px' }}
                ref={(element) => {
                  if (!PointsRef.current[topicIndex]) {
                    PointsRef.current[topicIndex] = [];
                  }
                  PointsRef.current[topicIndex][moduleIndex] = element;
                }}
              >
                {module.points.map((point, pointIndex) => (
                  <div key={pointIndex} className='point'>
                    <div className='bullet'></div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
