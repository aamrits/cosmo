import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import banner from '../../assets/images/background.jpg';
import { Button, RibbonContainer } from '../../components';

const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

const Home = () => {
  const [loading,setLoading] = useState(true);
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    getApodData();
    setLoading(false);
  }, [])

  const getApodData = async () => {
    // const apod_response = await axios.get(APOD_URL);
    // const apod_data = apod_response.data;
    // setApodData(apod_data);
  }

  return (
    <>
      <RibbonContainer text="Fun Facts" />
      <section className="banner">
        {/* <img src={banner} alt="" className="img-fluid banner__image" /> */}
        <div className="row g-0">
          <div className="col-6">
            Image
          </div>
          <div className="col-6">
            <div className="banner-left">
              <div className="banner-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <Link to="/" className="link-main">Ut enim</Link> ad minim veniam, quis nostrud</p>
              </div>
              <div className="banner-btns">
                <Link to="/mars-weather">
                  <Button text='Weather of mars' />
                </Link>
                <Link to="/search-images">
                  <Button text='Search Images' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PictureOfTheDay */}
      {/* <section className="picture">
        <div className="container">
          {loading ? (
            <div>Loading...</div>
          ) : (
          <div className="row">
            <div className="col-4">
              <img src={apodData.url} alt={apodData.title} className="img-fluid" />
            </div>
            <div className="col-8">
              <h3>{apodData.title}</h3>
              <p>{apodData.copyright ? apodData.copyright : ''} {apodData.date}</p>
              <p className="explanation">{apodData.explanation}</p>
            </div>
          </div>
          )}
        </div>
      </section> */}
    </>
  )
}

export default Home;
