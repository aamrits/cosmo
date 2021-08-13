import React, { useState, useEffect } from 'react';
import './styles.scss';
import axios from 'axios';

const IMAGES_URL = `https://images-api.nasa.gov/search?q=pluto`;

const SearchImages = () => {
  const [loading,setLoading] = useState(true);
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    // getApodData();
    // setLoading(false);
  }, [])

  const getApodData = async () => {
    // const apod_response = await axios.get(APOD_URL);
    // const apod_data = apod_response.data;
    // setApodData(apod_data);
  }

  return (
    <>
      <h1>SearchImages</h1>
    </>
  )
}

export default SearchImages;
