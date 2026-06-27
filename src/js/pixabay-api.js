import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(searchQuery, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '56435414-266ede0dff7cead03cfc4cf69',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return response.data;
}
