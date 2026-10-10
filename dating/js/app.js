(function () {
  var slides = document.querySelectorAll('.slide');
  var nav = document.getElementById('sliderNav');
  var i = 0;
  if (!slides.length) return;

  function go(n) {
    slides[i].classList.remove('active');
    if (nav && nav.children[i]) nav.children[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active');
    if (nav && nav.children[i]) nav.children[i].classList.add('active');
  }

  if (nav) {
    slides.forEach(function (_, idx) {
      var b = document.createElement('button');
      b.type = 'button';
      if (idx === 0) b.className = 'active';
      b.addEventListener('click', function () { go(idx); });
      nav.appendChild(b);
    });
  }

  setInterval(function () { go(i + 1); }, 5200);
})();
