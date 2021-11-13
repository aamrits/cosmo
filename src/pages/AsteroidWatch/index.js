import React, { useState, useEffect } from 'react';
import './styles.scss';
import moment from 'moment';
import { getNeoService } from '../../services/getNeoService';
import { Container } from '../../components';

const TODAY = moment().format("YYYY-MM-DD");

const AsteroidWatch = () => {
  const [loading,setLoading] = useState(true);
  const [neoData, setNeoData] = useState([]);
  const [asteroidsData, setAsteroidsData] = useState([]);

  useEffect(() => {
    getNeoData();
    setLoading(false);
  }, [])

  const getNeoData = async () => {
    const neo_data = await getNeoService(TODAY);
    setNeoData(neo_data);
  
    const TOTAL_ASTEROIDS = neo_data.near_earth_objects[TODAY];
    const ASTEROIDS_BASED_ON_SIZE = TOTAL_ASTEROIDS.sort((a, b) => { 
      return b.estimated_diameter.kilometers.estimated_diameter_max - a.estimated_diameter.kilometers.estimated_diameter_max
    });
    setAsteroidsData(ASTEROIDS_BASED_ON_SIZE);
  }

  return (
    <>
      <Container>
        <div className="col-md-12">
          <div className="title my-4">
            Asteroid watch
          </div>
        </div>
      </Container>

      <Container>
        <div className="col-12 scroll-container card-container">
          <h3 className="heading3">
            Asteroids passing near Earth's Orbit Today:
            <span>{loading ? '' : neoData.element_count }</span>
          </h3>
          {loading ? (
            <div>Loading...</div>
          ) : (
            asteroidsData.map(item => (
              <div key={ item.id } className="item">
                <div className="item-block">
                  <h3>Name</h3>
                  <p>{ item.name }</p>
                </div>
                <div className="item-block">
                  <h3>Approximate Size</h3>
                  <p>{ item.estimated_diameter.miles.estimated_diameter_min.toFixed(3) } - { item.estimated_diameter.miles.estimated_diameter_max.toFixed(3) } Miles</p>
                </div>
                <div className="item-block">
                  <h3>Closest Approach to Earth</h3>
                  <p>1040000 Miles</p>
                  <p>{ moment().format("ll") }</p>
                </div>
                <div className="item-block">
                  <h3>Potentially Hazardous</h3>
                  <p>{ setAsteroidsData.is_potentially_hazardous_asteroid ? 'YES' : 'NO' }</p>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </>
  )
}

export default AsteroidWatch