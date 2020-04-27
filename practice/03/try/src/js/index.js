(() => {
  'use strict';

  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  function toggleModal() {
    overlay.classList.toggle('is-active');
    content.classList.toggle('is-active');
  }

  document.getElementById('button').addEventListener('click', () => {
    toggleModal();
  });
  
  document.getElementById('modal-close').addEventListener('click', () => {
    toggleModal();
  });

  overlay.addEventListener('click', e => {
    toggleModal();
  });

  
})();