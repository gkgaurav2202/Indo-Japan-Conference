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
    </div>
  </div>
`;
})();
