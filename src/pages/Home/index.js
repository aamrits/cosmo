import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Button, RibbonContainer } from '../../components';

const Home = () => {
  return (
    <>
      {/* <RibbonContainer text="Fun Facts" /> */}
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="banner-left">
                <div className="banner-info">
                  <p>Checkout out the number of asteroids hitting Planet Earth daily. Fortunately, none are big enough to cause any serious damage. They burn harmlessly in our atmosphere.</p>
                </div>
                <div className="banner-btns">
                  <Link to="/asteroid-watch">
                    <Button text='Asteroid Watch' />
                  </Link>
                  <Link to="/mars-weather">
                    <Button text='Weather of mars' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-gap"></div>
          <div className="row align-items-end">
            <div className="col-6">
              <p className="home-title">welcome to my website</p>
              <h2 className="heading2">Cosmo</h2>
              <p>Checkout the <Link to="/astronomy-picture-of-the-day" className="link-main">Astronomy Picture of the day</Link></p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <Link to="/search-images" className="home-explore">Explore</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
