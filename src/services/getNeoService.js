import axios from 'axios';
import { NEO_URL } from '../constants/url';

export const getNeoService = async (date) => {
  return (await axios.get(`${NEO_URL}?start_date=${date}&end_date=${date}&api_key=${process.env.REACT_APP_API_KEY}`)).data;
}
