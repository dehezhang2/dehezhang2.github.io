/**
 * Smooth, full-resolution image zoom for the integrated gallery.
 *
 * Replaces fat/zoom.js. The old library used `transform: scale(...)` which
 * GPU-scales the already-rasterized thumbnail (~360px) and produces visible
 * blur on the zoomed-in image. This version animates width/height/top/left
 * instead — the browser re-rasterizes from the original 2048px source so
 * the zoomed image stays sharp.
 *
 * Public contract:
 *   - any <img data-action="zoom"> in the document is click-zoomable
 *   - Esc, scrolling past 40px, resize, or clicking anywhere closes the zoom
 *   - Cmd/Ctrl-click opens the original in a new tab (matches old behavior)
 */
(function () {
  'use strict';

  var STATE = null;
  var OFFSET = 60;        // padding between zoomed image and viewport edge
  var DURATION = 480;     // ms — must stay in sync with the CSS transition

  function openZoom(img) {
    if (STATE) return;

    var rect = img.getBoundingClientRect();
    var natW = img.naturalWidth  || img.width;
    var natH = img.naturalHeight || img.height;

    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var scale = Math.min((vw - OFFSET * 2) / natW, (vh - OFFSET * 2) / natH);
    if (scale > 1) scale = 1;   // never enlarge beyond natural resolution

    var targetW = Math.max(natW * scale, rect.width);
    var targetH = Math.max(natH * scale, rect.height);
    var targetLeft = (vw - targetW) / 2;
    var targetTop  = (vh - targetH) / 2;

    // Overlay
    var overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    document.body.appendChild(overlay);

    // Clone img — start it sitting exactly on top of the thumbnail
    var clone = document.createElement('img');
    clone.src = img.currentSrc || img.src;
    clone.className = 'zoom-clone';
    var cs = clone.style;
    cs.position = 'fixed';
    cs.top    = rect.top  + 'px';
    cs.left   = rect.left + 'px';
    cs.width  = rect.width  + 'px';
    cs.height = rect.height + 'px';
    cs.margin = '0';
    cs.borderRadius = window.getComputedStyle(img).borderRadius;
    cs.zIndex = 99999;
    cs.cursor = 'zoom-out';
    cs.transition = 'top ' + DURATION + 'ms cubic-bezier(0.22, 1, 0.36, 1),'
                  + 'left ' + DURATION + 'ms cubic-bezier(0.22, 1, 0.36, 1),'
                  + 'width ' + DURATION + 'ms cubic-bezier(0.22, 1, 0.36, 1),'
                  + 'height ' + DURATION + 'ms cubic-bezier(0.22, 1, 0.36, 1),'
                  + 'border-radius ' + DURATION + 'ms cubic-bezier(0.22, 1, 0.36, 1)';
    document.body.appendChild(clone);

    // Hide original so the clone is the only visible copy during the animation
    img.style.visibility = 'hidden';

    // Force a layout flush so the next frame is treated as a real transition
    void clone.offsetWidth;

    requestAnimationFrame(function () {
      overlay.classList.add('zoom-overlay-open');
      cs.top    = targetTop  + 'px';
      cs.left   = targetLeft + 'px';
      cs.width  = targetW + 'px';
      cs.height = targetH + 'px';
      cs.borderRadius = '0px';
    });

    STATE = {
      overlay: overlay,
      clone:   clone,
      img:     img,
      scrollY: window.scrollY || window.pageYOffset
    };
    document.documentElement.classList.add('zoom-open');
  }

  function closeZoom() {
    if (!STATE) return;
    var s = STATE;
    STATE = null;

    s.overlay.classList.remove('zoom-overlay-open');

    // Re-measure the original — the user may have scrolled while zoomed
    var r = s.img.getBoundingClientRect();
    var cs = s.clone.style;
    cs.top    = r.top  + 'px';
    cs.left   = r.left + 'px';
    cs.width  = r.width  + 'px';
    cs.height = r.height + 'px';
    cs.borderRadius = window.getComputedStyle(s.img).borderRadius;

    setTimeout(function () {
      if (s.overlay.parentNode) s.overlay.parentNode.removeChild(s.overlay);
      if (s.clone.parentNode)   s.clone.parentNode.removeChild(s.clone);
      s.img.style.visibility = '';
      document.documentElement.classList.remove('zoom-open');
    }, DURATION + 20);
  }

  // ---- Event wiring -------------------------------------------------------

  // Capture-phase click — runs before any other handler (including the
  // gallery's own delegated click) so we win the click on the thumbnail.
  document.addEventListener('click', function (e) {
    if (STATE) {
      closeZoom();
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.getAttribute('data-action') === 'zoom') {
      if (e.metaKey || e.ctrlKey) return;   // let the browser handle Cmd-click
      e.preventDefault();
      openZoom(t);
    }
  }, true);

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27 && STATE) closeZoom();   // Esc
  });

  window.addEventListener('scroll', function () {
    if (!STATE) return;
    if (Math.abs((window.scrollY || window.pageYOffset) - STATE.scrollY) > 40) {
      closeZoom();
    }
  }, { passive: true });

  window.addEventListener('resize', function () { if (STATE) closeZoom(); });
})();
