import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './index.css';

function Services(){
  return (
    <>
    <Header/>
    <div className="services">
      <h2 className="services__heading">Our Services</h2>
      <div className="services__grid">
        <div className="service">
          <i className="fas fa-book"></i>
          <h3 className="service__heading">Book Recommendations</h3>
          <p className="service__text">Let our expert team help you find your next favorite read with personalized book recommendations.</p>
        </div>
        <div className="service">
          <i className="fas fa-search"></i>
          <h3 className="service__heading">Book Search</h3>
          <p className="service__text">Easily search our vast collection of books by author, title, or genre.</p>
        </div>
        <div className="service">
          <i className="fas fa-pencil-alt"></i>
          <h3 className="service__heading">Book Reviews</h3>
          <p className="service__text">Stay up to date with the latest book releases and insightful reviews from our team of experts.</p>
        </div>
        <div className="service">
          <i className="fas fa-pencil-alt"></i>
          <h3 className="service__heading">Book Reviews</h3>
          <p className="service__text">Stay up to date with the latest book releases and insightful reviews from our team of experts.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Services;
