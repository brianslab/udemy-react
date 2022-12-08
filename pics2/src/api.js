import axios from 'axios';

import unsplashKey from '../src/config/keys';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${unsplashKey.access}`,
    },
    params: { query: 'cars' },
  });

  console.log(response);

  return response;
};

export default searchImages;
