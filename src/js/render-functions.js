import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

export function createGallery(images) {
  const galleryArray = [];
  for (const image of images) {
    const {
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = image;
    const markup = `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}"
            ><img
              src="${webformatURL}"
              alt="${tags}"
              width="360"
              height="152"
            />
            <ul class="info">
              <li class="info-list">
                <h3 class="info-list-title">Likes</h3>
                <p class="info-list-value">${likes}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Views</h3>
                <p class="info-list-value">${views}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Comments</h3>
                <p class="info-list-value">${comments}</p>
              </li>
              <li class="info-list">
                <h3 class="info-list-title">Downloads</h3>
                <p class="info-list-value">${downloads}</p>
              </li>
            </ul></a
          >
        </li>`;
    galleryArray.push(markup);
  }
  refs.galleryList.innerHTML = galleryArray.join('');
  // createSimpleLightBox();
  gallerySimpleLightBox.refresh();
}

const gallerySimpleLightBox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// export function createSimpleLightBox() {
//   const gallerySimpleLightBox = new SimpleLightbox('.gallery-link', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
// }

export function clearGallery() {
  refs.galleryList.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
