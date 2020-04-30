(() => {
  'use strict';

  const input = document.getElementById('input');

  input.addEventListener('input', () => {
    const text = input.value.indexOf('yes') > -1 ? input.value : '';
    document.getElementById('text').textContent = text;
  });
})();
