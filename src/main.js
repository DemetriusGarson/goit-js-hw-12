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

function onSubmitButtonClick(event) {
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
    const pixabayData = getImagesByQuery(searchQuery, page);

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
          if (Math.ceil(data.totalHits / 15 < page)) {
            console.log(
              `We're sorry, but you've reached the end of search results.`
            );
            iziToast.show({
              message: `We're sorry, but you've reached the end of search results.`,
              position: 'topRight',
            });
          } else {
            showLoadMoreButton();
            refs.loadMoreButton.addEventListener(
              'click',
              onLoadMoreButtonClick
            );
          }
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

function onLoadMoreButtonClick() {
  page += 1;
  showLoader();
  getImagesByQuery(searchQuery, page)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(data.hits);
        window.scrollBy({
          top:
            document.querySelector('.gallery-item').getBoundingClientRect()
              .height * 2,
          behavior: 'smooth',
        });
        if (Math.ceil(data.totalHits / 15 < page)) {
          console.log(
            `We're sorry, but you've reached the end of search results.`
          );
          iziToast.show({
            message: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight',
          });
          hideLoadMoreButton();
          refs.loadMoreButton.removeEventListener(
            'click',
            onLoadMoreButtonClick
          );
        }
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
