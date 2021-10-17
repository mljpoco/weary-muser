'use strict';

import { articles } from './articles.js';

let url = 'http://localhost:3000/';

function renderArticle() {
  const title = document.getElementById('titleWrapper');
  const body = document.getElementById('bodyWrapper');
  if (window.location.href === 'http://localhost:3000/index.html' || window.location.href === url) {
    title.innerHTML = articles[0].title;
    body.innerHTML = articles[0].body;
  } else {
    title.innerHTML = articles.find(
    article => url+article.href === window.location.href).title;
    body.innerHTML = articles.find(
    article => url+article.href === window.location.href).body;
  }
  loadTitleForShare(title);
  siftSearch(title);
}

function siftSearch(title) {
  const newer = document.getElementById('siftNewer');
  const older = document.getElementById('siftOlder');
  let currentPos = articles.findIndex(article => article.title === title.innerHTML);
  console.log('entry number '+articles[currentPos].id);
  (currentPos > 0) ?
  newer.href = articles[currentPos - 1].href :
  newer.removeAttribute('href');
  (currentPos < articles.length - 1) ?
  older.href = articles[currentPos + 1].href :
  older.removeAttribute('href');
}

function loadTitleForShare(title) {
  document.getElementById('ogTitle').setAttribute('content', title.innerHTML);
}

renderArticle();