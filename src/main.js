import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form input'),
  submitButton: document.querySelector('.form button[type=submit]'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onSubmitButtonClick);

function onSubmitButtonClick(event) {
  event.preventDefault();
  clearGallery();
  const inputText = refs.input.value.trim();
  if (inputText === '') {
    iziToast.show({
      message: 'Заполните поле',
      position: 'topRight',
    });
  } else {
    showLoader();
    const pixabayData = getImagesByQuery(inputText);

    pixabayData
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          createGallery(data.hits);
        }
      })
      .catch(error => {
        console.log(error);
        iziToast.show({
          message: `${error}`,
          position: 'topRight',
        });
      })
      .finally(() => hideLoader());
  }
}
