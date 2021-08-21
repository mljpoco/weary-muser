'use strict';
import {articles} from './articles.js';

const newer = document.getElementById('siftNewer');
const older = document.getElementById('siftOlder');

let articleViewer = {
  aIndex: 0,
  siftNewer() {
    articleViewer.aIndex = (articleViewer.aIndex > 0) ? --articleViewer.aIndex : articleViewer.aIndex;
    console.log('siftNewer fires', 'aIndex: ' + articleViewer.aIndex);
    renderArticle();
  },
  siftOlder() {
    articleViewer.aIndex = (articleViewer.aIndex < articles.length - 1) ? ++articleViewer.aIndex : articleViewer.aIndex;
    console.log('siftOlder fires', 'aIndex: ' + articleViewer.aIndex);
    renderArticle();
  },
};

function renderArticle() {
  newer.addEventListener('click', articleViewer.siftNewer);
  older.addEventListener('click', articleViewer.siftOlder);
  document.getElementById('titleWrapper').innerHTML = articles[articleViewer.aIndex].title;
  document.getElementById('bodyWrapper').innerHTML = articles[articleViewer.aIndex].body;
}

renderArticle();
