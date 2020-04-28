(() => {
  'use strict';

  function removeAllActiveClass(elements) {
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('is-active');
    }
  }

  function updateMainImg(srcPath) {
    const srcPathInfo= srcPath.split('/');
    const mainFilename = srcPathInfo.pop().replace('_small', '_large');
    const mainPath = [...srcPathInfo, [mainFilename]].join('/');

    document.querySelector('.main-img').src = mainPath;
  }

  const imgs = document.getElementsByClassName('thumb-item-img');

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseover', () => {
      removeAllActiveClass(imgs);
      imgs[i].classList.add('is-active');
      updateMainImg(imgs[i].getAttribute('src'));
    });
  }
})();