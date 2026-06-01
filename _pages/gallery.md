---
layout: single
title: "Gallery"
permalink: /photos/
author_profile: true
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="{{ '/assets/gallery/css/zoom.css' | relative_url }}">

<style>
/* ========== Typography (page-scoped) ========== */
body, .page, .page__content, .author__name, .author__bio,
.author__urls, .gallery-page, .gallery-page h1, .gallery-page h2,
.gallery-page h3, .gallery-page h4, .gallery-intro {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
               "Roboto", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page__content { font-size: 16px; line-height: 1.65; color: #2b2b2b; }
.page__title {
  font-weight: 800 !important;
  letter-spacing: -0.02em !important;
  font-size: 2.1em !important;
  margin-bottom: 0.3em !important;
}

.gallery-intro {
  color: #555;
  font-size: 1em;
  margin: 0.2em 0 1.4em;
}
.gallery-intro a { color: #2462c4; text-decoration: none; }
.gallery-intro a:hover { text-decoration: underline; }

/* ========== Category chip nav ========== */
.gallery-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 1.6em;
}
.gallery-chips a {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e4e4e8;
  color: #444;
  font-size: 0.85em;
  font-weight: 500;
  text-decoration: none !important;
  transition: all 0.15s;
}
.gallery-chips a:hover {
  background: #2462c4;
  color: #fff;
  border-color: #2462c4;
  transform: translateY(-1px);
}

/* ========== Gallery container (scoped) ========== */
.gallery-page #gallery {
  margin: 0;
  padding: 0;
}
.gallery-page #gallery section {
  margin: 0 0 64px;
  scroll-margin-top: 80px;
}
.gallery-page #gallery section h3 {
  margin: 0 0 18px;
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-transform: none;
  color: #1a1a1a;
  padding-bottom: 8px;
  position: relative;
}
.gallery-page #gallery section h3::after {
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 40px;
  height: 3px;
  background: #2462c4;
  border-radius: 2px;
}
.gallery-page #gallery section h3::before {
  content: "";
  position: absolute;
  left: 40px; bottom: 1px;
  right: 0;
  height: 1px;
  background: #ececec;
}

.gallery-page #gallery section img {
  vertical-align: middle;
  opacity: 0;
  /* The transform transition is owned by zoom.css when the image is zoomed.
     Here we use a separate, slower transform for the subtle hover lift so
     the two animations don't collide. */
  transition: opacity 0.45s ease,
              transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 220ms ease;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.05);
  box-sizing: border-box;
  filter: blur(2px);
  cursor: zoom-in;
}
.gallery-page #gallery section img.img-loaded {
  opacity: 1;
  filter: blur(0);
}
.gallery-page #gallery section img:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.10);
}

.gallery-page #gallery .sectionrow {
  display: block;
  white-space: nowrap;
  overflow-x: hidden;
}

.gallery-footer {
  margin-top: 2em;
  padding: 14px 18px;
  background: #fafafa;
  border: 1px dashed #ddd;
  border-radius: 10px;
  color: #6b6b6b;
  font-size: 0.9em;
  text-align: center;
}
.gallery-footer a { color: #2462c4; }

/* ========== Responsive ========== */
@media (max-width: 600px) {
  .page__title { font-size: 1.55em !important; }
  .gallery-page #gallery section { margin-bottom: 40px; }
  .gallery-page #gallery section h3 { font-size: 1.15em; }
  .gallery-chips a { font-size: 0.8em; padding: 4px 11px; }
}
</style>

<div class="gallery-page">

<p class="gallery-intro">
A growing collection from my travels — moments framed across cities, mountains, festivals, and golden-hour light. Click any image to zoom; pinch / scroll to dismiss.
</p>

<div class="gallery-chips">
  <a href="#Landscape">Landscape</a>
  <a href="#Goldenhour">Golden Hour</a>
  <a href="#Nature">Nature</a>
  <a href="#City">City</a>
  <a href="#Culture">Culture</a>
  <a href="#Portraits">Portraits</a>
  <a href="#Event">Event</a>
</div>

<div id="gallery"></div>

<div class="gallery-footer">
  <i class="fas fa-camera" style="margin-right:6px;color:#9aa4b1;"></i>
  Captured by Deheng Zhang · follow more on
  <a href="https://www.instagram.com/dehengzhang1009">Instagram @dehengzhang1009</a>
</div>

</div>

<script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-beta.2/lazyload.js"></script>
<script src="{{ '/assets/gallery/js/gallery.js' | relative_url }}"></script>
<script src="{{ '/assets/gallery/js/zoom.js' | relative_url }}"></script>
<script>
  var COLUMNS = 'columns';
  var ROWS    = 'rows';
  var SQUARES = 'squares';
  var layoutStyle = ROWS;
  var configuration = {
    spacing: 10,
    shuffle: false,
    columns: 4,
    maxHeight: 360
  };

  function startGallery() {
    var id = 'gallery';
    fetch("{{ '/assets/gallery/config.json' | relative_url }}")
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var rootEl = document.getElementById(id);
        if (!rootEl) return;
        // Clear any prior render in case of re-invocation
        rootEl.innerHTML = '';
        var renderer;
        switch (layoutStyle) {
          case COLUMNS: renderer = new VerticalRenderer(id); break;
          case ROWS:    renderer = new HorizontalRenderer(id); break;
          case SQUARES: renderer = new SquareRenderer(id); break;
        }
        var config = new Config(data, configuration);
        renderer.render(config);
        if (typeof lazyload === 'function') lazyload();
      })
      .catch(function(err) {
        console.error('Gallery load failed:', err);
      });
  }

  // Run after full window load so the sidebar/masthead layout settles and
  // #gallery's bounding width is correct for the row renderer.
  if (document.readyState === 'complete') {
    startGallery();
  } else {
    window.addEventListener('load', startGallery);
  }
</script>
