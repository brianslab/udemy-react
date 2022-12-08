import axios from 'axios';

import unsplashKey from '../src/config/keys';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${unsplashKey.access}`,
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;
