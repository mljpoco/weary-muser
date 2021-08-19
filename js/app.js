import {first} from './articles/first.js';
import {second} from './articles/second.js';

const archivedArticles = {
  articles: [
    second,
    first
  ],
  aIndex: 0,
  siftNewer() {
    console.log('siftnewer fires');
    let newIndex = (this.aIndex > 0) ? --this.aIndex : 0;
    this.aIndex = newIndex;
    console.log(this.aIndex);
  },
  siftOlder() {
    console.log('siftolder fires', this.articles);
    let newIndex = (this.aIndex < this.articles.length) ? ++this.aIndex : this.articles.length;
    this.aIndex = newIndex;
    console.log(this.aIndex);
  }
};
console.log(archivedArticles.articles)
document.getElementById('siftNewer').addEventListener('click', archivedArticles.siftNewer);
document.getElementById('siftOlder').addEventListener('click', archivedArticles.siftOlder);

window.onload = function renderArticle() {
  document.getElementById('titleWrapper').innerHTML = archivedArticles.articles[archivedArticles.aIndex].title;
  document.getElementById('bodyWrapper').innerHTML = archivedArticles.articles[archivedArticles.aIndex].body;
}


