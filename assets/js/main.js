window.addEventListener('load', function () {
  // Check if the current page is index.html
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    alert("Welcome to my portfolio site! 🎉");
  }
});

// Simple "Read more" for one project
const btnMore = document.getElementById('readMore1');
const extra    = document.getElementById('extra1');

if (btnMore && extra) {
  btnMore.addEventListener('click', () => {
    // toggle the hidden state
    const isHidden = extra.hasAttribute('hidden');
    if (isHidden) {
      extra.removeAttribute('hidden');       
      btnMore.textContent = 'Close';     
      btnMore.setAttribute('aria-expanded', 'true');
    } else {
      extra.setAttribute('hidden', '');      
      btnMore.textContent = 'Expand';
      btnMore.setAttribute('aria-expanded', 'false');
    }
  });
}
// Inject footer into all pages
fetch("assets/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
