(() => {
  'use strict';
  
  document.getElementById('button').addEventListener('click', e => {
    document.querySelector('.text--type').textContent = e.currentTarget.dataset.type;
    document.querySelector('.text--class').textContent = e.currentTarget.className;
  }); 
})();