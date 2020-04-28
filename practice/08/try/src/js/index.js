(() => {
  'use strict';

  function createArticleElement(title, body) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    h3.textContent = title;
    p.textContent = body;
    
    li.appendChild(h3);
    li.appendChild(p);
    
    return li;
  }
  
  const url = 'https://jsonplaceholder.typicode.com/posts';
  
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const ul = document.getElementById('list');
    for(let i = 0; i < data.length; i++) {
      const li = createArticleElement(data[i].title, data[i].body);
      ul.appendChild(li);
    }
  });
})();
