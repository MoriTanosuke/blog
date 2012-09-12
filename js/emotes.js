var emoticons = {
  smile: '<img src="/img/emotes/face-smile.png" alt=":-)" />',
  sad: '<img src="/img/emotes/face-sad.png" alt=":-(" />',
  wink: '<img src="/img/emotes/face-wink.png" alt=";-)" />',
  plain: '<img src="/img/emotes/face-plain.png" alt=":-|" />',
  grin: '<img src="/img/emotes/face-grin.png" alt=":-D" />',
  surprise: '<img src="/img/emotes/face-surprise.png" alt=":-O" />',
};

var patterns = {
  smile: /:-\)/gm,
  sad: /:-\(/gm,
  wink: /;-\)/gm,
  plain: /:-\|/gm,
  grin: /:-D/gm,
  surprise: /:-O/gm,
};

$(document).ready(function() {
  $('p').each(function() {
    var $p = $(this);
    var html = $p.html();
    
    $p.html(html.replace(patterns.smile, emoticons.smile).
    replace(patterns.sad, emoticons.sad).
    replace(patterns.wink, emoticons.wink).
    replace(patterns.plain, emoticons.plain).
    replace(patterns.grin, emoticons.grin).
    replace(patterns.surprise, emoticons.surprise));  
  });
});
