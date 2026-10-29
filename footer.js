/* Footer shared by all pages. Edit the text between the backticks, and every page updates. */
(function () {
  var footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
  <div class="wrap">
    <div class="footer-id">
      <div>
        <strong>Indo-Japan Conference</strong><br>
        15–17 December 2026
      </div>
      <img src="DST.svg" alt="">
      <img src="imsc.svg" alt="">
      <img src="KAKENHI.svg" alt="">
    </div>
  </div>
`;
})();
// line saying that Claude was used
(function () {
  var f = document.getElementById('site-footer');
  if (!f || f.querySelector('.footer-note')) return;
  f.insertAdjacentHTML('beforeend', '<div class="wrap"><p class="footer-note">This website was created with the assistance of Claude, an AI assistant by Anthropic.</p></div>');
})();