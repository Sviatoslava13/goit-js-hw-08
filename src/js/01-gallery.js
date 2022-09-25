//import templatesGallery from '../templates/gallery.hbs';
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const elementGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => ` <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" style="display: block" />
</a>`,
  )
  .join('');
elementGallery.insertAdjacentHTML('afterbegin', markup);
console.log(markup);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
