
import axios from 'axios'


const BASE_URL = 'https://youtube-v31.p.rapidapi.com/'

const options = {
  url: BASE_URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '4791a945c0msh357597686c72517p141cd6jsn19007c8bc574',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const fetchFromAPI = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, options);
      return data;
    } catch (error) {
      console.error(error);
    }
  };