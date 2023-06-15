import React from 'react';
import './Testimonial.css';
import user1 from '../assets/john-doe.jpeg';
import user2 from '../assets/jane-smith.jpeg';
import user3 from '../assets/mike-johnson.jpeg';
const testimonials = [
  {
    title: 'John Doe',
    content:
      'The Java Full Stack course helped me gain a comprehensive understanding of both front-end and back-end development. The instructors were knowledgeable and provided hands-on practical examples. Highly recommended!',
    image: user2,
  },
  {
    title: 'Jane Smith',
    content:
      'I enrolled in the Python Full Stack course and it exceeded my expectations. The curriculum was well-structured, and the step-by-step approach made it easy to grasp complex concepts. The course material and projects were very helpful in building real-world applications.',
    image: user1,
  },
  {
    title: 'Mike Johnson',
    content:
      "As someone interested in MERN stack development, I found the MERN Stack course to be an excellent choice. The instructors were excellent in explaining each component of the stack, and the hands-on projects helped me solidify my knowledge. I'm now confident in building full-stack web applications.",
    image: user3,
  },
];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h2 className='custom-services-heading'>Testimonials</h2>
      <div
        id='testimonial-carousel'
        className='carousel slide '
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className='row justify-content-center'>
                <div className='col-md-4'>
                  <div className='testimonial-card'>
                    <img
                      className='testimonial-img'
                      src={testimonial.image}
                      alt={testimonial.title}
                    />
                    <div className='card-body'>
                      <h2 className='card-title'>{testimonial.title}</h2>
                      <p className='card-text'>{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#testimonial-carousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#testimonial-carousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
