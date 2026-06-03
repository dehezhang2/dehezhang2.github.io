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
/* ========== Typography ========== */
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

/* ========== Loading state ========== */
.gallery-loading {
  text-align: center;
  padding: 60px 0;
  color: #888;
  font-size: 0.95em;
}
.gallery-loading .spinner {
  display: inline-block;
  width: 22px; height: 22px;
  border: 2px solid #ececec;
  border-top-color: #2462c4;
  border-radius: 50%;
  animation: gallery-spin 0.8s linear infinite;
  margin-right: 10px;
  vertical-align: -5px;
}
@keyframes gallery-spin { to { transform: rotate(360deg); } }

.gallery-error {
  padding: 16px 20px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  color: #b91c1c;
  font-size: 0.92em;
}

/* ========== Gallery sections ========== */
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

/* ========== Masonry grid via CSS multi-column ========== */
.gallery-page .photo-grid {
  column-count: 3;
  column-gap: 10px;
}
@media (max-width: 1100px) { .gallery-page .photo-grid { column-count: 2; } }
@media (max-width: 600px)  { .gallery-page .photo-grid { column-count: 1; } }

.gallery-page .photo-grid img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 0 10px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.05);
  box-sizing: border-box;
  break-inside: avoid;
  cursor: zoom-in;
  background: #f4f4f6;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease,
              transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.2s ease;
}
.gallery-page .photo-grid img.is-loaded {
  opacity: 1;
  transform: translateY(0);
}
.gallery-page .photo-grid img:hover {
  box-shadow: 0 8px 18px rgba(0,0,0,0.10);
}

/* ========== Footer ========== */
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

@media (max-width: 600px) {
  .page__title { font-size: 1.55em !important; }
  .gallery-page #gallery section { margin-bottom: 40px; }
  .gallery-page #gallery section h3 { font-size: 1.15em; }
  .gallery-chips a { font-size: 0.8em; padding: 4px 11px; }
}
</style>

<div class="gallery-page">

<p class="gallery-intro">
A growing collection from my travels — moments framed across cities, mountains, festivals, and golden-hour light. Click any image to zoom; Esc / scroll / click to dismiss.
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

<div id="gallery">
  <div class="gallery-loading"><span class="spinner"></span>Loading photos…</div>
</div>

<div class="gallery-footer">
  <i class="fas fa-camera" style="margin-right:6px;color:#9aa4b1;"></i>
  Captured by Deheng Zhang · follow more on
  <a href="https://www.instagram.com/dehengzhang1009">Instagram @dehengzhang1009</a>
</div>

</div>

<script src="{{ '/assets/gallery/js/zoom.js' | relative_url }}"></script>
<script>
(function () {
  'use strict';

  /* Display order matches the category chip nav above */
  var ORDER = ['Landscape', 'Goldenhour', 'Nature', 'City', 'Culture', 'Portraits', 'Event'];
  var LABEL = {
    Goldenhour: 'Golden Hour'
  };

  function render(data) {
    var root = document.getElementById('gallery');
    if (!root) return;
    root.innerHTML = '';  /* clear loading spinner */

    ORDER.forEach(function (cat) {
      var photos = data[cat];
      if (!photos || !photos.length) return;

      var section = document.createElement('section');
      section.id = cat;

      var heading = document.createElement('h3');
      heading.textContent = LABEL[cat] || cat;
      section.appendChild(heading);

      var grid = document.createElement('div');
      grid.className = 'photo-grid';

      photos.forEach(function (p) {
        var img = document.createElement('img');
        img.src = p.path;
        img.alt = cat + ' photo';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.setAttribute('data-action', 'zoom');
        img.addEventListener('load', function () { img.classList.add('is-loaded'); });
        img.addEventListener('error', function () {
          /* If the photo fails to load (e.g., rate-limited raw.githubusercontent)
             hide the broken image rather than show a placeholder. */
          img.style.display = 'none';
        });
        grid.appendChild(img);
      });

      section.appendChild(grid);
      root.appendChild(section);
    });

    /* Any categories not in ORDER — append in JSON-order */
    Object.keys(data).forEach(function (cat) {
      if (ORDER.indexOf(cat) !== -1) return;
      var photos = data[cat];
      if (!photos || !photos.length) return;

      var section = document.createElement('section');
      section.id = cat;
      var heading = document.createElement('h3');
      heading.textContent = LABEL[cat] || cat;
      section.appendChild(heading);
      var grid = document.createElement('div');
      grid.className = 'photo-grid';
      photos.forEach(function (p) {
        var img = document.createElement('img');
        img.src = p.path;
        img.alt = cat + ' photo';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.setAttribute('data-action', 'zoom');
        img.addEventListener('load', function () { img.classList.add('is-loaded'); });
        img.addEventListener('error', function () { img.style.display = 'none'; });
        grid.appendChild(img);
      });
      section.appendChild(grid);
      root.appendChild(section);
    });
  }

  function showError(msg) {
    var root = document.getElementById('gallery');
    if (!root) return;
    root.innerHTML = '<div class="gallery-error">'
      + '<strong>Could not load gallery.</strong> ' + msg
      + '</div>';
  }

  fetch("{{ '/assets/gallery/config.json' | relative_url }}", { cache: 'no-cache' })
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(render)
    .catch(function (err) {
      console.error('Gallery load failed:', err);
      showError('Photo manifest could not be fetched (' + err.message + ').');
    });
})();
</script>
