import images from '../data/images.js';
import makeLiTemplate from './make-li-template.js';

const imageList = document.getElementById('image-list');

images.forEach(imgObject => {
  const dom = makeLiTemplate(imgObject);
  imageList.appendChild(dom);
});
