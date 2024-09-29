import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/get-meta-data',
  headers: {
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY // Ensure this environment variable is set
  }
};

export const fetchHotels = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error.response ? error.response.data : error.message);
    throw error;
  }
};
