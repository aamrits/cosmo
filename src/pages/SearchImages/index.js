import React, { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { getImageService } from '../../services/getImageService';
import { Container, Button } from '../../components';

const SearchImages = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [imagesData, setImagesData] = useState([]);

  const getImagesData = async () => {
    const imagesArray = await getImageService(text);
    const imagesList = imagesArray.collection.items;
    console.log(imagesList);
    setImagesData(imagesList);
    setLoading(false);
  }

  return (
    <>
      <Container>
        <div className="col-md-12">
          <div className="title my-4">
            Search Images
          </div>
        </div>
      </Container>
      <Container>
        <div className="col-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control" 
              aria-label="Search"
              placeholder="Search keyword like Jupiter, Sun, etc..."
              value={text}
              onChange={ (e) => setText(e.target.value) }
            />
            <span className="input-group-text" onClick={getImagesData}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="header-container">
            <h3 className="heading3">{loading ? '' : `Showing Images of ${text}`}</h3>
          </div>
        </div>
      
        {!loading ? imagesData.map((image) => (
          <div className="col-md-4 my-2 search-images" key={image.data[0].nasa_id}>
            <img className="img-fluid" src={image.links[0].href} alt={image.data[0].description_508} />
            <div className="image-download">
              <Link to={image.links[0].href.replace('thumb', 'orig')} target="_blank" rel="noreferrer">
                <Button text='Download' />
              </Link>
            </div>
            <div className="image-title"> 
              <p>{image.data[0].description_508}</p>
            </div>
          </div>
        )) : ''}
      </Container>
    </>
    
  )
}

export default SearchImages;
