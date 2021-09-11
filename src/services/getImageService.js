import axios from 'axios';
import { IMAGES_URL } from '../constants/url';

export const getImageService = async (text) => {
  return (await axios.get(`${IMAGES_URL}?q=${text}`)).data;
}
