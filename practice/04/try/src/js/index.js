(() => {
  'use strict';

  const buttons = document.getElementsByClassName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
      e.currentTarget.nextElementSibling.classList.toggle('is-active');
    });
  }

  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', e => {
  //     const wrapper = e.currentTarget.parentNode;
  //     wrapper.querySelector('.list').classList.toggle('is-active');
  //   });
  // }
})();