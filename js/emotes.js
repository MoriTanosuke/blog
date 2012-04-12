var emoticons = {
  smile: '<img src="/img/emotes/face-smile.png" />',
  sad: '<img src="/img/emotes/face-sad.png" />',
  wink: '<img src="/img/emotes/face-wink.png" />'
};

var patterns = {
  smile: /:-\)/gm,
  sad: /:-\(/gm,
  wink: /;-\)/gm
};

$(document).ready(function() {
  $('p').each(function() {
    var $p = $(this);
    var html = $p.html();
    
    $p.html(html.replace(patterns.smile, emoticons.smile).
    replace(patterns.sad, emoticons.sad).
    replace(patterns.wink, emoticons.wink));  
  });
});
