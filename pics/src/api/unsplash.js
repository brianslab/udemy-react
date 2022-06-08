import axios from 'axios';
import unsplashKey from './keys';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : { Authorization: `Client-ID ${unsplashKey.access}` }
});
