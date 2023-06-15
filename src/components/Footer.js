import React from 'react';
import { Layout } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import './Footer.css';
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className='app-footer'>
      <div className='footer-links'>
        <a href='/aboutus' className='footer-link'>
          About
        </a>
        <a href='#services' className='footer-link'>
          Services
        </a>
        <a href='/contact' className='footer-link'>
          Contact
        </a>
      </div>
      <div className='social-media'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-link'
        >
          <FacebookOutlined className='social-media-icon' />
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-link'
        >
          <TwitterOutlined className='social-media-icon' />
        </a>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-link'
        >
          <InstagramOutlined className='social-media-icon' />
        </a>
      </div>
      <p className='footer-text'>
        © 2023 My Tuition Website. All rights reserved.
      </p>
    </Footer>
  );
};

export default AppFooter;
