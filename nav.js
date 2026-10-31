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
    ['Register',   'index.html#register']
  ];

  var header = document.getElementById('site-header');
  if (!header) return;

  // Name of the current page, for example "speakers" (works with or without ".html")
  var file = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (file === '') file = 'index';

  /* ---- Title and description for search engines, one place for all pages ----
     'page name': ['title (about 60 characters)', 'description (about 155 characters)']
     The home page is not here: it keeps the title and description written in index.html. */
  var SEO = {
    'speakers': ['Speakers | L-functions and Multiple Zeta functions', 'Invited speakers of the conference on L-functions and Multiple Zeta functions, 15-17 December 2026, The Institute of Mathematical Sciences, Chennai.'],
    'schedule': ['Schedule | L-functions and Multiple Zeta functions', 'Schedule of the conference on L-functions and Multiple Zeta functions: talks, breaks and the poster session, 15-17 December 2026, Chennai.'],
    'talks':    ['Talks and Abstracts | L-functions and Multiple Zeta functions', 'Talk titles and abstracts of the conference on L-functions and Multiple Zeta functions, 15-17 December 2026, Chennai.'],
//    'photos':   ['Photos | L-functions and Multiple Zeta functions', 'Photos of the conference on L-functions and Multiple Zeta functions, Chennai, December 2026.']
  };
  if (SEO[file]) {
    document.title = SEO[file][0];
    var md = document.querySelector('meta[name="description"]');
    if (!md) { md = document.createElement('meta'); md.name = 'description'; document.head.appendChild(md); }
    md.content = SEO[file][1];
  }
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
