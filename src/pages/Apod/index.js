import React, { useState, useEffect } from 'react';
import './styles.scss';
import { getAPODService } from '../../services/getAPODService';
import { Container } from '../../components';

const Apod = () => {
  const [loading,setLoading] = useState(true);
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    getApodData();
    setLoading(false);
  }, [])

  const getApodData = async () => {
    const apod_data = await getAPODService();
    setApodData(apod_data);
  }

  return (
    <>
      <Container>
        <div className="col-md-12">
          <div className="title my-4">
            Astronomy Picture of the day
          </div>
        </div>
      </Container>
      <section className="picture">
        <div className="container">
          {loading ? (
            <div>Loading...</div>
          ) : (
          <div className="row">
            <div className="col-4">
              <img src={apodData.url} alt={apodData.title} className="img-fluid img-apod" />
            </div>
            <div className="col-8 card-container scroll-container">
              <h3 className="heading3">{apodData.title}</h3>
              <p>{apodData.copyright ? apodData.copyright : ''} {apodData.date}</p>
              <p className="explanation">{apodData.explanation}</p>
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Apod
