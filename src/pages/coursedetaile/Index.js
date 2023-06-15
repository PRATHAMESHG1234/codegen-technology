import React from 'react';
import { Button, Select } from 'antd';
import detailback from '../../assets/detailback.jpg';
import CourseDetail1 from './CourseDetail1';

const { Option } = Select;

const Index = () => {
  const handleCourseChange = (value) => {
    console.log(`Selected course: ${value}`);
    // Handle course selection logic here
  };

  return (
    <div className='course-section'>
      <CourseDetail1 />
    </div>
  );
};

export default Index;
