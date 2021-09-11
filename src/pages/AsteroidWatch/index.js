import React, { useState, useEffect } from 'react';
import './styles.scss';
import moment from 'moment';
import { getNeoService } from '../../services/getNeoService';
import { MainBody } from '../../components';

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
    <MainBody>
      <div className="col-12">
        <div className="header-container">
          <h1 className="page-title">Asteroid Watch</h1>
          <div className="header-right">
            <p className="m-0">Today's Count of Asteroids passing near Earth's Orbit :  
              <span>{loading ? '' : neoData.element_count }</span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-12">
        
      </div>

      <div className="col-12">
        <p>Next Asteroids passing near our planet</p>
        {loading ? (
          <div>Loading...</div>
        ) : (
          asteroidsData.map(item => (
            <div key={ item.id } className="item">
              <div className="item-block">
                <img src="https://via.placeholder.com/100" alt="" className="img-fluid" />
                <p className="img-title">House size</p>
              </div>
              <div className="item-block">
                <h3>Name</h3>
                <p>{ item.name }</p>
                <h3>Approximate Size</h3>
                <p>{ item.estimated_diameter.miles.estimated_diameter_min.toFixed(3) } - { item.estimated_diameter.miles.estimated_diameter_max.toFixed(3) } Miles</p>
              </div>
              <div className="item-block">
                <h3>Closest Approach to Earth</h3>
                <p>1040000 Miles | { moment().format("ll") }</p>
                <h3>Potentially Hazardous</h3>
                <p>{ setAsteroidsData.is_potentially_hazardous_asteroid ? 'YES' : 'NO' }</p>
              </div>
              
            </div>
          ))
        )}
      </div>
    </MainBody>
  )
}

export default AsteroidWatch