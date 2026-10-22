/* Dozy Pixel Studio: mobile menu only. No tracking, no dependencies. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');
  if (!toggle || !menu) return;

  var desktop = window.matchMedia('(min-width: 860px)');

  function isOpen() {
    return menu.classList.contains('is-open');
  }

  function setOpen(open, returnFocus) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (!open && returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Escape closes the menu and puts focus back on the button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) setOpen(false, true);
  });

  // Clicking a link or anywhere outside the header closes the menu.
  document.addEventListener('click', function (event) {
    if (!isOpen()) return;
    var insideMenu = menu.contains(event.target);
    var onToggle = toggle.contains(event.target);
    if (onToggle) return;
    if (!insideMenu || event.target.closest('a')) setOpen(false);
  });

  // Reset when the window grows to desktop width.
  function onResize(event) {
    if (event.matches) setOpen(false);
  }
  if (desktop.addEventListener) {
    desktop.addEventListener('change', onResize);
  } else if (desktop.addListener) {
    desktop.addListener(onResize);
  }
})();
