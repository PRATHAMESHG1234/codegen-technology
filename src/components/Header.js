import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import logo from '../assets/logo.png';
import './header.css';

const AppHeader = () => {
  const handleScrollToSection = (sectionId) => {
    // Redirect to home page and append anchor
    window.location.href = `/#${sectionId}`;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='ant-layout-header'>
      <div className='header-container'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <Menu
          className='menu-items'
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['home']}
        >
          <Menu.Item key='home'>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key='services'>
            <NavLink
              to='#services'
              onClick={() => handleScrollToSection('services')}
            >
              Services
            </NavLink>
          </Menu.Item>
          <Menu.Item key='Internship-Page'>
            <NavLink
              to='#Internship-Page'
              onClick={() => handleScrollToSection('Internship-Page')}
            >
              Internship
            </NavLink>
          </Menu.Item>
          <Menu.Item key='testimonials'>
            <Link
              to='#testimonials'
              onClick={() => handleScrollToSection('testimonials')}
            >
              Testimonials
            </Link>
          </Menu.Item>
          <Menu.Item key='aboutus'>
            <Link to='/aboutus'>AboutUs</Link>
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};

export default AppHeader;
