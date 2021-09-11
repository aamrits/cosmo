import axios from 'axios';
import { APOD_URL } from '../constants/url';

export const getAPODService = async (text) => {
  return (await axios.get(`${APOD_URL}?api_key=${process.env.REACT_APP_API_KEY}`)).data;
}
