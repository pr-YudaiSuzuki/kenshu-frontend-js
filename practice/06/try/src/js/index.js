(() => {
  'use strict';

  const form = document.getElementById('form');

  document.getElementById('button').addEventListener('click', () => {
    const name = form.name.value;
    const gender = form.gender.value;
    
    document.getElementById('text-wrapper').classList.add('is-active');
    document.getElementById('name-text').textContent = name;
    document.getElementById('gender-text').textContent = gender;
  });

})();