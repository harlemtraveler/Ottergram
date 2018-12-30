const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const TINY_EFFECT_CLASS = 'is-tiny';
const ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
  'use strict';

  const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailFromThumb(thumbnail) {
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict'
  thumb.addEventListener('click', function (e) {
    e.preventDefault();
    setDetailFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict';
  const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  // Convert returned data to an array
  const thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  const frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  'use strict'
  document.body.addEventListener('keyup', function(e) {
    e.preventDefault();
    console.log(e.keyCode);
    if (e.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  'use strict';
  const thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
// const firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
// firstThumbnail.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('You clicked!');
//     console.log(event);
// });
