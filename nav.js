/* Menu shared by all pages.
   To add, remove or rename a menu item, edit the list below. Every page updates.
   The page you are on is highlighted automatically. */
(function () {
  var brand = 'L-functions and Multiple Zeta functions';

  var items = [
    ['Home',       'index.html'],
    ['Speakers',   'speakers.html'],
    ['Schedule',   'schedule.html'],
    ['Talks',      'talks.html'],
 //   ['Photos',     'photos.html'],
    ['Register',   'index.html#register'],
  ];

  var header = document.getElementById('site-header');
  if (!header) return;

  // Name of the current page, for example "speakers" (works with or without ".html")
  var file = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (file === '') file = 'index';

  var links = '';
  for (var i = 0; i < items.length; i++) {
    var href = items[i][1];
    var target = href.split('#')[0].replace(/\.html$/, '');
    var isCurrent = href.indexOf('#') === -1 && target === file;
    links += '<li><a href="' + href + '"' + (isCurrent ? ' aria-current="page"' : '') + '>' + items[i][0] + '</a></li>';
  }

  header.innerHTML =
    '<div class="wrap">' +
      '<a class="brand" href="index.html">' + brand + '</a>' +
      '<nav aria-label="Main"><ul>' + links + '</ul></nav>' +
    '</div>';
})();
