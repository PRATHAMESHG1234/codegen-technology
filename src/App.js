import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUsPage from './pages/About';
import Index from './pages/coursedetaile/Index';
// import CourseDetails from './pages/courseDetaile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/coursedetals/:courseName' element={<Index />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
