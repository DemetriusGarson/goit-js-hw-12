import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form input'),
  submitButton: document.querySelector('.form button[type=submit]'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreButton: document.querySelector('.load-more-button'),
};

let searchQuery = null;
let page = 1;

refs.form.addEventListener('submit', onSubmitButtonClick);

async function onSubmitButtonClick(event) {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  refs.loadMoreButton.removeEventListener('click', onLoadMoreButtonClick);
  page = 1;
  searchQuery = refs.input.value.trim();
  if (searchQuery === '') {
    iziToast.show({
      message: 'Заполните поле',
      position: 'topRight',
    });
  } else {
    showLoader();
    try {
      const data = await getImagesByQuery(searchQuery, page);
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(data.hits);
        if (page < Math.ceil(data.totalHits / 15)) {
          console.log(
            `We're sorry, but you've reached the end of search results.`
          );
          iziToast.show({
            message: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight',
          });
        } else {
          showLoadMoreButton();
          refs.loadMoreButton.addEventListener('click', onLoadMoreButtonClick);
        }
      }
    } catch (error) {
      console.log(error);
      iziToast.error({
        message: `${error}`,
        position: 'topRight',
      });
    }
    hideLoader();
  }
}

async function onLoadMoreButtonClick() {
  hideLoadMoreButton();
  refs.loadMoreButton.removeEventListener('click', onLoadMoreButtonClick);
  page += 1;
  showLoader();
  try {
    const data = await getImagesByQuery(searchQuery, page);
    createGallery(data.hits);
    window.scrollBy({
      top:
        document.querySelector('.gallery-item').getBoundingClientRect().height *
        2,
      behavior: 'smooth',
    });
    if (page < Math.ceil(data.totalHits / 15)) {
      console.log(`We're sorry, but you've reached the end of search results.`);
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
      refs.loadMoreButton.addEventListener('click', onLoadMoreButtonClick);
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: `${error}`,
      position: 'topRight',
    });
  }
  hideLoader();
}
