import React from 'react';
import './coursedetail1.css';
import CourseContent from './CourseContent';
import { useParams } from 'react-router-dom';
import { data } from './courseData';
const CourseDetail1 = () => {
  const { courseName } = useParams();
  // Define the data array
  console.log(courseName);

  const course = data.filter(
    (course) => course.aboutSection.heading === courseName
  );

  // Check if the filtered data exists
  if (course.length === 0) {
    return <div>No course details found for {courseName}</div>;
  }
  console.log(course[0].aboutSection.heading);
  // Extract the first matching course from the filtered data
  return (
    <div className='course-details-container'>
      {/* Render data */}
      {course.map((item, index) => (
        <div key={index}>
          {/* Render about section */}
          {item.aboutSection && (
            <div className='course-about-us-page'>
              <div className='course-about-section'>
                <h2 className='course-about-section-heading'>
                  {item.aboutSection.heading}
                </h2>
                <p className='course-about-section-subheading'>
                  {item.aboutSection.subheading}
                </p>

                <div className='course-info-section'>
                  <p className='course-info-section-description'>
                    {item.aboutSection.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Render tags */}
          {item.tags && (
            <div className='course-tags-container'>
              {item.tags.map((tag, index) => (
                <div className='course-tag' key={index}>
                  <img
                    className='course-tag-image'
                    src={tag.image}
                    alt={tag.description}
                  />
                  <h6>{tag.heading}</h6>
                  <p className='course-tag-description'>{tag.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Render course details */}
          {item.courseDetails && (
            <div className='course-detaile-cards'>
              <div className='course-overview-highlight'>
                <div className='course-overview-section'>
                  <h2>{item.courseDetails.overview}</h2>
                  <p>{item.courseDetails.overviewDescription}</p>
                </div>

                <div className='key-highlights-section'>
                  <h2>Key Highlights</h2>
                  <div className='highlight-list-container'>
                    <ul className='highlight-list'>
                      {item.courseDetails.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {item.smalltags && (
                <div className='small-course-tags-container'>
                  <h2>Technologies Covered</h2>
                  {item.smalltags.map((tag, index) => (
                    <div className='small-course-tag' key={index}>
                      <img
                        className='small-course-tag-image'
                        src={tag.image}
                        alt={tag.description}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {course.length > 0 && (
        <CourseContent CourseName={course[0].aboutSection.heading} />
      )}
    </div>
  );
};

export default CourseDetail1;
