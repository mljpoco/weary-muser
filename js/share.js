'use strict';

loadTitleAndUrlForShare();
shareButtons();

function loadTitleAndUrlForShare() {
  const title = document.getElementsByClassName('article-title');
  document.getElementById('ogTitle').setAttribute('content', title.innerHTML);
  document.getElementById('ogUrl').setAttribute('content', window.location.href);
}

function shareButtons() {
  const twitter = document.getElementById('twitter');
  const facebook = document.getElementById('facebook');
  const reddit = document.getElementById('reddit');
  const tumblr = document.getElementById('tumblr');
  const copyLink = document.getElementById('copyLink');

  twitter.addEventListener('click', () => {
    twitter.target = '_blank';
    twitter.href = 'https://twitter.com/intent/tweet?url=' + window.location.href;
  });
  facebook.addEventListener('click', () => {
    facebook.target = '_blank';
    facebook.href = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href;
  })
  reddit.addEventListener('click', () => {
    reddit.target = '_blank';
    reddit.href = 'https://www.reddit.com/submit?url=' + window.location.href;
  });
  tumblr.addEventListener('click', () => {
    tumblr.target = '_blank';
    tumblr.href = 'https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=' + window.location.href;
  });
  copyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    alert('This entry\'s link has been copied to your clipboard.');
  });
}