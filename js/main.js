/* Ryoko Pro — ryokopro.vercel.app
   Two jobs: the mobile navigation panel and the sticky order bar.
   No animation library and no scroll handlers, so nothing competes for
   main-thread time after first paint. */
(function () {
  "use strict";

  var btn = document.querySelector(".nav-btn");
  var panel = document.getElementById("nav-panel");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* The dock appears once the opening buttons have scrolled away and hides
     again over the pricing band, where a buy button is already on screen. */
  var dock = document.querySelector(".dock");
  if (!dock || !("IntersectionObserver" in window)) return;

  var pastTop = false;
  var atOffer = false;
  function sync() { dock.classList.toggle("on", pastTop && !atOffer); }

  var top = document.getElementById("rig-go");
  if (top) {
    new IntersectionObserver(function (es) {
      pastTop = !es[0].isIntersecting; sync();
    }).observe(top);
  }
  var offer = document.getElementById("price");
  if (offer) {
    new IntersectionObserver(function (es) {
      atOffer = es[0].isIntersecting; sync();
    }, { threshold: 0 }).observe(offer);
  }
})();
