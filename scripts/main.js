const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

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
  });
// Add last two functions in here?
}

function getThumbnailsArray() {
  'use strict';
  const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  // Convert returned data to an array
  const thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  const thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
// const firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);
// firstThumbnail.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('You clicked!');
//     console.log(event);
// });
