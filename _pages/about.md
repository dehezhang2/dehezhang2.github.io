---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>
/* ========== Global typography overrides (homepage) ========== */
body, .page, .page__content, .author__name, .author__bio,
.author__urls, .section-heading, .paper-title, .paper-authors,
.experience-title, .experience-org, .experience-date, .experience-desc,
.honors-list, .services-list, .news-list, .research-interests,
.btn, h1, h2, h3, h4, h5, h6 {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
               "Roboto", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page__content { font-size: 16px; line-height: 1.65; color: #2b2b2b; }
.page__content p { margin: 0.6em 0 1em; }
.page__content a { color: #2462c4; text-decoration: none; }
.page__content a:hover { text-decoration: underline; }
.page__content strong { font-weight: 600; color: #1a1a1a; }

/* Page title ("About me") — make it feel like a name */
.page__title {
  font-weight: 800 !important;
  letter-spacing: -0.02em !important;
  font-size: 2.1em !important;
  margin-bottom: 0.3em !important;
}

/* ========== Left sidebar (author profile) refinement ========== */
.sidebar .author__avatar img {
  border-radius: 50% !important;
  border: 3px solid #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  max-width: 180px;
  width: 100%;
  height: auto;
}
.sidebar .author__name {
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: 1.4em;
  margin-top: 0.6em;
  color: #1a1a1a;
}
.sidebar .author__bio {
  color: #5b5b5b;
  font-size: 0.95em;
  margin-top: 0.2em;
}
/* The theme hides the "Follow" button automatically at ≥1200px.
   Below that, the button toggles the social-icons dropdown — keep it
   visible there but restyle it to feel native rather than chunky. */
.sidebar .btn.btn--inverse {
  background: transparent;
  color: #2462c4;
  border: 1px solid #2462c4;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 500;
  padding: 4px 16px;
  margin: 6px 0 0;
  transition: all 0.15s;
}
.sidebar .btn.btn--inverse:hover {
  background: #2462c4;
  color: #fff;
}
/* When the dropdown is open, switch the button label affordance */
.sidebar .author__urls-wrapper button.open { background: #2462c4; color: #fff; }

/* Social icon list: clean monochrome line style with hover accent */
.sidebar .author__urls.social-icons {
  padding-left: 0;
  margin-top: 0.8em;
}
.sidebar .author__urls.social-icons li {
  list-style: none;
  margin: 6px 0;
  font-size: 0.92em;
  color: #4a4a4a;
}
.sidebar .author__urls.social-icons li a {
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.sidebar .author__urls.social-icons li a:hover { color: #2462c4; }
.sidebar .author__urls.social-icons li i {
  width: 18px;
  font-size: 1em;
  color: #6c757d;
  text-align: center;
  transition: color 0.15s;
}
.sidebar .author__urls.social-icons li a:hover i { color: #2462c4; }

/* ========== Hover-fade effect for project / paper teasers ========== */
.one  { position: relative; }
.two  {
  position: absolute;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;
}

/* EgoSpot: PNG is 3:2 but the video is 16:9 — lock the box to the
   video's aspect and letterbox the PNG with vertical padding so the
   static and hover states line up perfectly. */
.egospot-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.egospot-media > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;          /* keep PNG aspect — letterbox horizontally */
  padding: 4.7% 0;              /* vertical breathing room for the PNG */
  box-sizing: border-box;
  background: #fff;
  z-index: 1;
}
.egospot-media > .two {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;                   /* sit above the static PNG so the video shows on hover */
}
.egospot-media > .two video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.fade {
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;
}
span.highlight { background-color: #ffffd0; }

/* ========== Section heading ========== */
.section-heading {
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: -0.015em;
  padding-bottom: 8px;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #1a1a1a;
  position: relative;
}
.section-heading::after {
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 40px;
  height: 3px;
  background: #2462c4;
  border-radius: 2px;
}
.section-heading::before {
  content: "";
  position: absolute;
  left: 40px; bottom: 0;
  right: 0;
  height: 1px;
  background: #ececec;
  bottom: 1px;
}

/* ========== About / Research interests ========== */
.research-interests {
  padding-left: 1.2em;
  margin: 0.4em 0 0.6em;
}
.research-interests li {
  margin: 5px 0;
  line-height: 1.55;
  color: #2b2b2b;
}
.research-interests li::marker { color: #2462c4; }

/* ========== News list ========== */
.news-list {
  max-height: 280px;
  overflow-y: auto;
  padding: 14px 20px;
  background: #fafafa;
  border: 1px solid #ececec;
  border-radius: 12px;
  font-size: 0.95em;
  line-height: 1.65;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}
.news-list ul { list-style: none; padding-left: 0; margin: 0; }
.news-list li {
  padding: 6px 0;
  border-bottom: 1px dashed #ececec;
}
.news-list li:last-child { border-bottom: none; }
.news-list .news-date {
  display: inline-block;
  min-width: 70px;
  color: #6b6b6b;
  font-weight: 500;
  font-size: 0.88em;
  font-feature-settings: "tnum";
}
/* Custom scrollbar */
.news-list::-webkit-scrollbar { width: 6px; }
.news-list::-webkit-scrollbar-thumb { background: #d0d0d0; border-radius: 3px; }
.news-list::-webkit-scrollbar-track { background: transparent; }

/* ========== Venue badges ========== */
.venue {
  display: inline-block;
  padding: 3px 10px;
  margin-left: 8px;
  border-radius: 14px;
  font-size: 0.7em;
  font-weight: 700;
  color: #fff;
  background: #3a86ff;
  vertical-align: middle;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}
.venue.iclr     { background: #d33f49; }
.venue.neurips  { background: #6f42c1; }
.venue.tdv      { background: #0d9488; }
.venue.cvpr     { background: #1b7e3a; }
.venue.course   { background: #6c757d; }
.venue.thesis   { background: #495057; }
.venue.highlight { background: #f59f00; color: #1a1a1a; }

/* ========== Paper / project card ========== */
.paper-card {
  margin: 0 0 1.2em;
  padding: 0;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
}
.paper-card:hover {
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  border-color: #d8d8d8;
  transform: translateY(-2px);
}
.paper-card table { margin: 0; border: none; }
.paper-card td { border: none; padding: 16px; }
.paper-card img, .paper-card video { border-radius: 8px; }
.paper-title {
  font-size: 1.08em;
  font-weight: 600;
  line-height: 1.4;
  color: #1a1a1a;
  margin-bottom: 6px;
}
.paper-title a { color: #1a1a1a; }
.paper-title a:hover { color: #2462c4; }
.paper-authors {
  color: #444;
  font-size: 0.93em;
  line-height: 1.55;
  margin: 4px 0;
}
.paper-authors strong { color: #c0392b; font-weight: 600; }
.paper-authors a { color: #2462c4; }
.paper-links { margin-top: 6px; }
.paper-links a {
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 2px 10px;
  border: 1px solid #d0d0d0;
  border-radius: 14px;
  font-size: 0.82em;
  font-weight: 500;
  color: #2462c4;
  text-decoration: none !important;
  transition: all 0.15s;
}
.paper-links a:hover {
  background: #2462c4;
  color: #fff;
  border-color: #2462c4;
  text-decoration: none !important;
}
.paper-tldr {
  color: #555;
  font-size: 0.9em;
  line-height: 1.55;
  margin-top: 8px;
}

/* ========== Project carousel (auto-scrolls horizontally) ========== */
.project-carousel {
  overflow: hidden;
  margin: 0.6em 0;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 4%, #000 96%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 4%, #000 96%, transparent);
}
.project-track {
  display: flex;
  width: max-content;
  animation: project-scroll 60s linear infinite;
  will-change: transform;
}
.project-carousel:hover .project-track,
.project-carousel:focus-within .project-track {
  animation-play-state: paused;
}
@keyframes project-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.project-track .project-tile {
  flex: 0 0 320px;
  width: 320px;
  margin-right: 18px;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
}
.project-tile:hover {
  box-shadow: 0 10px 26px rgba(0,0,0,0.10);
  border-color: #d8d8d8;
  transform: translateY(-3px);
}
.project-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #f5f5f5;
  overflow: hidden;
}
.project-thumb .static,
.project-thumb .anim {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.25s ease-in-out;
}
.project-thumb .anim { opacity: 0; }
.project-tile:hover .project-thumb .anim { opacity: 1; }
.project-info { padding: 14px 16px 16px; flex: 1; display: flex; flex-direction: column; }
.project-title {
  font-weight: 600;
  font-size: 0.98em;
  color: #1a1a1a;
  line-height: 1.4;
  margin-bottom: 4px;
}
.project-title a { color: #1a1a1a; }
.project-title a:hover { color: #2462c4; }
.project-authors {
  color: #6c757d;
  font-size: 0.84em;
  line-height: 1.5;
  margin-bottom: 6px;
}
.project-authors strong { color: #c0392b; font-weight: 600; }
.project-tldr {
  color: #555;
  font-size: 0.85em;
  line-height: 1.5;
  margin: 4px 0 8px;
  flex: 1;
}
.project-links { margin-top: auto; }
.project-links a {
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 1px 9px;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  font-size: 0.78em;
  font-weight: 500;
  color: #2462c4;
  text-decoration: none !important;
  transition: all 0.15s;
}
.project-links a:hover {
  background: #2462c4;
  color: #fff;
  border-color: #2462c4;
}

/* ========== Experience carousel (auto-scrolls vertically) ========== */
.experience-carousel {
  position: relative;
  overflow: hidden;
  height: 360px;
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent);
}
.experience-carousel .experience-list {
  animation: experience-scroll 35s linear infinite;
  will-change: transform;
}
.experience-carousel:hover .experience-list,
.experience-carousel:focus-within .experience-list {
  animation-play-state: paused;
}
@keyframes experience-scroll {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}

/* ========== Experience / Affiliations cards (reference style + hover-expand) ========== */
.experience-list { list-style: none; padding: 0; margin: 0; }
.experience-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 18px 22px;
  margin-bottom: 12px;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05),
              0 0 0 1px rgba(0,0,0,0.02);
  transition: box-shadow 0.25s ease,
              transform 0.25s ease,
              padding 0.25s ease;
  cursor: default;
}
.experience-item:hover {
  box-shadow: 0 10px 28px rgba(0,0,0,0.10),
              0 0 0 1px rgba(0,0,0,0.04);
  transform: translateY(-2px);
}
.experience-logo {
  flex: 0 0 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
  padding: 6px;
  overflow: hidden;
  transition: transform 0.25s ease;
}
.experience-item:hover .experience-logo { transform: scale(1.04); }
.experience-logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
.experience-logo-fallback {
  font-weight: 700;
  font-size: 0.78em;
  color: #6c757d;
  text-align: center;
  line-height: 1.15;
  letter-spacing: 0.2px;
}
.experience-content { flex: 1; min-width: 0; }
.experience-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.experience-title {
  font-weight: 600;
  font-size: 1em;
  color: #1a1a1a;
  line-height: 1.4;
}
.experience-org { color: #444; font-size: 0.92em; margin-top: 2px; }
.experience-org a { color: #2462c4; }
.experience-date {
  color: #6b6b6b;
  font-size: 0.86em;
  font-weight: 500;
  white-space: nowrap;
  font-feature-settings: "tnum";
}

/* Collapsed details — hidden by default, expand on hover */
.experience-details {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.25s ease 0.05s, margin-top 0.25s ease;
  margin-top: 0;
}
.experience-item:hover .experience-details,
.experience-item:focus-within .experience-details {
  max-height: 400px;
  opacity: 1;
  margin-top: 10px;
}
.experience-details .experience-desc {
  color: #555;
  font-size: 0.9em;
  line-height: 1.55;
  margin: 0 0 6px;
}
.experience-details ul {
  margin: 4px 0 0;
  padding-left: 1.1em;
  color: #555;
  font-size: 0.88em;
  line-height: 1.55;
}
.experience-details ul li { margin: 2px 0; }
.experience-details strong { color: #1a1a1a; font-weight: 600; }
/* Subtle "hover to expand" hint chip */
.experience-content .expand-hint {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.75em;
  color: #9a9a9a;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: opacity 0.2s ease;
  user-select: none;
}
.experience-content .expand-hint::before {
  content: "›";
  display: inline-block;
  margin-right: 4px;
  transition: transform 0.25s ease;
}
.experience-item:hover .expand-hint { opacity: 0; }

/* ========== Honors ========== */
.honors-list { list-style: none; padding: 0; margin: 0; }
.honors-list li {
  padding: 9px 0;
  border-bottom: 1px dashed #ececec;
  display: flex;
  gap: 14px;
  align-items: baseline;
  font-size: 0.95em;
}
.honors-list li:last-child { border-bottom: none; }
.honors-list .year {
  flex: 0 0 110px;
  color: #6b6b6b;
  font-size: 0.88em;
  font-weight: 500;
  font-feature-settings: "tnum";
}
.honors-list .award { flex: 1; color: #222; }

/* ========== Services ========== */
.services-list { list-style: none; padding: 0; margin: 0; }
.services-list li {
  padding: 7px 0;
  font-size: 0.95em;
  border-bottom: 1px dashed #ececec;
}
.services-list li:last-child { border-bottom: none; }
.role-tag {
  display: inline-block;
  padding: 2px 9px;
  border-radius: 10px;
  background: #fff3bf;
  color: #7a5800;
  font-size: 0.7em;
  margin-left: 6px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  vertical-align: middle;
}

/* ========== Responsive: tablet (≤ 900px) ========== */
@media (max-width: 900px) {
  .page__title { font-size: 1.85em !important; }
  .section-heading { font-size: 1.35em; margin-top: 1.5em; }

  /* Sidebar profile sits above content — make avatar smaller */
  .sidebar .author__avatar img { max-width: 150px; }
  .sidebar .author__name { font-size: 1.3em; }

  /* Paper cards: image stacks on top, content below */
  .paper-card td {
    display: block;
    width: 100% !important;
    padding: 12px 14px;
  }
  .paper-card tr > td:first-child { padding-bottom: 0; }
  .paper-title { font-size: 1em; }
  .paper-authors { font-size: 0.9em; }
  .paper-tldr { font-size: 0.88em; }

  /* Project carousel: smaller tiles */
  .project-track .project-tile {
    flex: 0 0 280px;
    width: 280px;
    margin-right: 14px;
  }

  /* Experience cards: tighter spacing */
  .experience-item { padding: 14px 16px; gap: 14px; }
  .experience-logo { flex: 0 0 56px; height: 56px; }

  /* News list */
  .news-list { padding: 12px 14px; max-height: 260px; }
  .news-list .news-date { min-width: 58px; font-size: 0.84em; }
}

/* ========== Responsive: phone (≤ 600px) ========== */
@media (max-width: 600px) {
  .page__title { font-size: 1.55em !important; }
  .section-heading { font-size: 1.2em; margin-top: 1.3em; }
  .page__content { font-size: 15px; }

  /* Sidebar elements above the content stream on mobile */
  .sidebar .author__avatar img { max-width: 120px; }
  .sidebar .author__name { font-size: 1.15em; }

  /* Reduce horizontal padding on paper cards */
  .paper-card td { padding: 10px 12px; }
  .paper-card { border-radius: 12px; }

  /* Venue badge: drop to a new line on small screens to avoid overflow */
  .paper-title .venue,
  .project-title .venue {
    display: inline-block;
    margin: 4px 0 0 0;
    vertical-align: baseline;
  }
  .paper-title, .project-title { line-height: 1.35; }

  /* PROJECTS: replace marquee with native swipe carousel (touch-friendly) */
  .project-carousel {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    -webkit-mask-image: none;
            mask-image: none;
    padding-bottom: 4px;
  }
  .project-carousel::-webkit-scrollbar { height: 4px; }
  .project-carousel::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
  .project-track {
    animation: none !important;
    transform: none !important;
    width: max-content;
  }
  .project-track .project-tile {
    scroll-snap-align: start;
    flex: 0 0 84vw;
    width: 84vw;
    max-width: 320px;
    margin-right: 12px;
  }
  /* Drop the duplicate set — natural scroll is enough */
  .project-track > [aria-hidden="true"] { display: none; }
  .project-thumb { aspect-ratio: 16 / 9; }

  /* EXPERIENCE: drop the vertical marquee, show all cards static */
  .experience-carousel {
    height: auto;
    overflow: visible;
    -webkit-mask-image: none;
            mask-image: none;
  }
  .experience-carousel .experience-list {
    animation: none !important;
    transform: none !important;
  }
  .experience-list > [aria-hidden="true"] { display: none; }

  /* Always-expanded details (no hover on touch) */
  .experience-item {
    padding: 12px 14px;
    gap: 12px;
    align-items: flex-start;
  }
  .experience-logo {
    flex: 0 0 48px;
    height: 48px;
    padding: 4px;
  }
  .experience-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
  .experience-title { font-size: 0.95em; }
  .experience-org   { font-size: 0.85em; }
  .experience-date  { font-size: 0.8em; margin-top: 2px; }
  .expand-hint { display: none; }
  .experience-details {
    max-height: none !important;
    opacity: 1 !important;
    margin-top: 8px !important;
    overflow: visible !important;
    transition: none;
  }
  .experience-details ul { font-size: 0.85em; }

  /* News list — tighter on phone */
  .news-list { padding: 10px 12px; max-height: 240px; font-size: 0.92em; }
  .news-list li { padding: 5px 0; }
  .news-list .news-date {
    display: block;
    min-width: 0;
    margin-bottom: 1px;
  }

  /* Honors list — single column */
  .honors-list li { flex-wrap: wrap; gap: 4px; padding: 7px 0; }
  .honors-list .year { flex: 0 0 100%; font-size: 0.82em; }

  /* Services list — break onto multiple lines comfortably */
  .services-list li { font-size: 0.92em; line-height: 1.5; }
  .role-tag { display: inline-block; margin: 2px 0 2px 4px; }

  /* Hover-fade carousel section hints — slightly smaller */
  .experience-carousel + p, .project-carousel + p { font-size: 0.8em; }
}

/* ========== Touch devices (any width) ========== */
@media (hover: none) and (pointer: coarse) {
  /* On touch devices the hover effects don't work, so:
     - Show the static still image only (no hover-gif swap needed)
     - Make expand details visible by default */
  .project-tile .project-thumb .anim { display: none; }
  .experience-details {
    max-height: none;
    opacity: 1;
    margin-top: 8px;
  }
  .expand-hint { display: none; }
}

/* ========== Visitor map card ========== */
.visitors-card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.05);
  padding: 14px;
  margin: 0.4em 0 1.4em;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}
.visitors-card:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border-color: #d8d8d8;
}
.visitors-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.02em;
  color: #1a1a1a;
  margin-bottom: 10px;
}
.visitors-card-header .dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: #ff5353;
  box-shadow: 0 0 0 4px rgba(255,83,83,0.18);
  animation: visitors-pulse 1.8s ease-in-out infinite;
}
@keyframes visitors-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(255,83,83,0.18); }
  50%      { box-shadow: 0 0 0 8px rgba(255,83,83,0.08); }
}

.visitors-map-frame {
  position: relative;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, #fafbfd 0%, #f1f4f9 100%);
  padding: 8px 4px;
  min-height: 320px;
}
#visitor-geochart {
  width: 100%;
  height: 420px;
}
#visitor-geochart svg { display: block; margin: 0 auto; }
/* The default tooltip from Google Charts is hideous — soften it. */
#visitor-geochart text { font-family: "Inter", sans-serif !important; }

.visitors-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #ececec;
  font-size: 0.85em;
  color: #555;
}
.visitors-legend .gradient-bar {
  display: inline-block;
  width: 80px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #e6f0ff, #5da9ff, #2462c4, #1e4a8a);
  vertical-align: middle;
  margin: 0 6px;
}

@media (max-width: 600px) {
  .visitors-card { padding: 10px; border-radius: 12px; }
  .visitors-card-header { font-size: 0.98em; margin-bottom: 8px; }
}

/* ========== Masthead / top navigation — mobile fixes ========== */
@media (max-width: 768px) {
  .masthead__inner-wrap { padding: 0.7em 0.9em !important; }
  .greedy-nav { min-width: 0; background: transparent; }
  .greedy-nav a { margin: 0 0.6rem; padding: 0.4rem 0; font-size: 0.95em; }
  .masthead__menu-item--lg a { font-size: 1em; }
  .greedy-nav button {
    width: 44px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .greedy-nav .hidden-links {
    right: 0;
    margin-top: 8px;
    min-width: 140px;
    z-index: 30;
  }
  .greedy-nav .hidden-links a { padding: 8px 14px; font-size: 0.95em; }
}
@media (max-width: 480px) {
  .masthead__inner-wrap { padding: 0.5em 0.7em !important; }
  .greedy-nav a { margin: 0 0.4rem; font-size: 0.9em; }
  .masthead__menu-item--lg a { font-size: 0.95em; padding-right: 0.6em; }
  .greedy-nav button { width: 40px; }
}
</style>

I am a Researcher at [INSAIT](https://insait.ai/), working with [Prof. Luc Van Gool](https://insait.ai/prof-luc-van-gool/) and [Dr. Danda Paudel](https://insait.ai/dr-danda-paudel/). I received my MSc from [ETH Zürich](https://ethz.ch/de.html), where I conducted 3D Vision and Graphics research at [Disney Research \| Studios Zürich](https://studios.disneyresearch.com/) (with [Prof. Markus Gross](https://inf.ethz.ch/de/personen/person-detail.mgross.html)) and at [VLG](https://vlg.inf.ethz.ch/index.html) (with [Prof. Siyu Tang](https://vlg.inf.ethz.ch/team/Prof-Dr-Siyu-Tang.html)). I obtained my Bachelor's degree from [City University of Hong Kong](https://www.cityu.edu.hk/).

My research lies at the intersection of **vision-language modeling**, **spatial AI**, and **controllable visual representations**. I aim to build models that jointly reason about language and 3D environments, enabling fine-grained, controllable generation and editing of both 2D and 3D scene representations.

**Research Interests**
<ul class="research-interests">
  <li>Vision-Language Models &amp; Multimodal Reasoning</li>
  <li>Spatial AI and 3D Scene Understanding</li>
  <li>Controllable 2D / 3D Generation &amp; Editing</li>
  <li>Neural Rendering and Inverse Rendering</li>
</ul>

Outside research, I enjoy [Rendering](https://dehezhang2.github.io/Kombu/), [Photography](https://dehezhang2.github.io/photos/), video games, fingerstyle guitar, table tennis, skiing, and hiking.

<h2 id="news" class="section-heading">News</h2>
<div class="news-list">
<ul>
  <li><span class="news-date">2026.01</span>🎉 My first-author paper <em>EgoNight: Towards Egocentric Vision Understanding at Night with a Challenging Benchmark</em> has been accepted to <strong>ICLR 2026</strong>!</li>
  <li><span class="news-date">2025.09</span>🎉 Our paper <em>StateSpaceDiffuser: Bringing Long Context to Diffusion World Models</em> has been accepted to <strong>NeurIPS 2025</strong>!</li>
  <li><span class="news-date">2025.04</span>I joined <strong>INSAIT</strong> as a Researcher, supervised by <a href="https://insait.ai/prof-luc-van-gool/">Prof. Luc Van Gool</a> and <a href="https://insait.ai/dr-danda-paudel/">Dr. Danda Paudel</a>!</li>
  <li><span class="news-date">2024.10</span>🎉 My first-author paper <em>RISE-SDF: a Relightable Information-Shared Signed Distance Field for Glossy Object Inverse Rendering</em> has been accepted to <strong>3DV 2025</strong>!</li>
  <li><span class="news-date">2023.10</span>🎉 My first-author paper <em>CoARF: Controllable 3D Artistic Style Transfer for Radiance Fields</em> has been accepted to <strong>3DV 2024</strong>!</li>
</ul>
</div>

<h2 id="publications" class="section-heading">Publications</h2>

<div class="paper-card">
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="14">
  <tr onmouseout="egonight_stop()" onmouseover="egonight_start()">
    <td width="40%">
      <div class="one">
        <div class="two" id="egonight_shape">
          <img src="/images/projects/egonight.gif" width="100%">
        </div>
        <img src="/images/projects/egonight.png" width="100%">
      </div>
      <script type="text/javascript">
        function egonight_start() { document.getElementById('egonight_shape').style.opacity = "1"; }
        function egonight_stop()  { document.getElementById('egonight_shape').style.opacity = "0"; }
        egonight_stop();
      </script>
    </td>
    <td valign="top" width="60%">
      <div class="paper-title">EgoNight: Towards Egocentric Vision Understanding at Night with a Challenging Benchmark<span class="venue iclr">ICLR 2026</span></div>
      <div class="paper-authors">
        <strong>Deheng Zhang*</strong>,
        <a href="https://yuqianfu.com/">Yuqian Fu*</a>,
        <a href="https://runyiyang.github.io/">Runyi Yang</a>,
        <a href="https://y9miao.github.io/">Yang Miao</a>,
        <a href="https://qiantianwen.github.io/">Tianwen Qian</a>,
        <a href="https://zhengxujosh.github.io/">Xu Zheng</a>,
        <a href="https://guoleisun.github.io/">Guolei Sun</a>,
        <a href="https://ajadchhatkuli.github.io/">Ajad Chhatkuli</a>,
        <a href="https://xuanjing-huang.github.io/">Xuanjing Huang</a>,
        <a href="https://fvl.fudan.edu.cn/people/yugangjiang/">Yu-Gang Jiang</a>,
        <a href="https://insait.ai/prof-luc-van-gool/">Luc Van Gool</a>,
        <a href="https://insait.ai/dr-danda-paudel/">Danda Pani Paudel</a>
      </div>
      <div class="paper-links">
        <a href="https://openreview.net/pdf?id=DKD4QbOKBN">Paper</a>
        <a href="https://dehezhang2.github.io/EgoNight/">Project</a>
        <a href="https://github.com/dehezhang2/EgoNight">Code</a>
        <a href="https://huggingface.co/datasets/dehezhang2/EgoNight">Dataset</a>
      </div>
      <div class="paper-tldr">The first comprehensive benchmark for egocentric vision understanding in low-light and nighttime conditions, comprising synthetic scenes (EgoNight-Synthetic), aligned day–night pairs (EgoNight-Sofia), and unaligned nighttime footage (EgoNight-Oxford).</div>
    </td>
  </tr>
</table>
</div>

<div class="paper-card">
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="14">
  <tr onmouseout="statespacediffuser_stop()" onmouseover="statespacediffuser_start()">
    <td width="40%">
      <div class="one">
        <div class="two" id="statespacediffuser_shape">
          <img src="/images/projects/statespacediffuser.gif" width="100%">
        </div>
        <img src="/images/projects/statespacediffuser.png" width="100%">
      </div>
      <script type="text/javascript">
        function statespacediffuser_start() { document.getElementById('statespacediffuser_shape').style.opacity = "1"; }
        function statespacediffuser_stop()  { document.getElementById('statespacediffuser_shape').style.opacity = "0"; }
        statespacediffuser_stop();
      </script>
    </td>
    <td valign="top" width="60%">
      <div class="paper-title">StateSpaceDiffuser: Bringing Long Context to Diffusion World Models<span class="venue neurips">NeurIPS 2025</span></div>
      <div class="paper-authors">
        <a href="https://insait.ai/nedko-savov/">Nedko Savov</a>,
        <a href="https://insait.ai/naser-kazemi/">Naser Kazemi</a>,
        <strong>Deheng Zhang</strong>,
        <a href="https://insait.ai/dr-danda-paudel/">Danda Paudel</a>,
        <a href="https://xiwang1212.github.io/homepage/">Xi Wang</a>,
        <a href="https://insait.ai/prof-luc-van-gool/">Luc Van Gool</a>
      </div>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2505.22246">Paper</a>
        <a href="https://insait-institute.github.io/StateSpaceDiffuser/">Project</a>
        <a href="https://github.com/insait-institute/StateSpaceDiffuser">Code</a>
      </div>
      <div class="paper-tldr">A diffusion world model that overcomes the memory bottleneck by integrating features from a state-space model representing the entire interaction history, enabling long-context world modeling.</div>
    </td>
  </tr>
</table>
</div>

<div class="paper-card">
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="14">
  <tr onmouseout="risesdf_stop()" onmouseover="risesdf_start()">
    <td width="40%">
      <div class="one">
        <div class="two" id="risesdf_shape">
          <img src="/images/projects/risesdf.gif" width="100%">
        </div>
        <img src="/images/projects/risesdf.png" width="100%">
      </div>
      <script type="text/javascript">
        function risesdf_start() { document.getElementById('risesdf_shape').style.opacity = "1"; }
        function risesdf_stop()  { document.getElementById('risesdf_shape').style.opacity = "0"; }
        risesdf_stop();
      </script>
    </td>
    <td valign="top" width="60%">
      <div class="paper-title">RISE-SDF: a Relightable Information-Shared Signed Distance Field for Glossy Object Inverse Rendering<span class="venue tdv">3DV 2025</span></div>
      <div class="paper-authors">
        <strong>Deheng Zhang*</strong>,
        <a href="https://github.com/ccetaw">Jingyu Wang*</a>,
        <a href="https://taconite.github.io/">Shaofei Wang</a>,
        <a href="https://markomih.github.io/">Marko Mihajlovic</a>,
        <a href="https://vlg.inf.ethz.ch/team/Dr-Sergey-Prokudin.html">Sergey Prokudin</a>,
        <a href="https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/computergrafik/lehrstuhl/mitarbeiter/prof-dr-ing-hendrik-lensch/">Hendrik P.A. Lensch</a>,
        <a href="https://vlg.inf.ethz.ch/team/Prof-Dr-Siyu-Tang.html">Siyu Tang</a>
      </div>
      <div class="paper-links">
        <a href="https://www.arxiv.org/pdf/2409.20140">Paper</a>
        <a href="https://dehezhang2.github.io/RISE-SDF/">Project</a>
        <a href="https://github.com/dehezhang2/RISE-SDF">Code</a>
        <a href="https://drive.google.com/drive/folders/1991eNN5-bMWK7aEHf99VU_iGZsH6FnAc">Dataset</a>
      </div>
      <div class="paper-tldr">An end-to-end relightable neural inverse-rendering system enabling high-quality reconstruction of geometry and material properties. The core idea is a two-stage approach for better factorization of scene parameters, supporting high-quality relighting of glossy objects.</div>
    </td>
  </tr>
</table>
</div>

<div class="paper-card">
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="14">
  <tr onmouseout="coarf_stop()" onmouseover="coarf_start()">
    <td width="40%">
      <div class="one">
        <div class="two" id="coarf_shape">
          <img src="/images/projects/coarf.gif" width="100%">
        </div>
        <img src="/images/projects/coarf.png" width="100%">
      </div>
      <script type="text/javascript">
        function coarf_start() { document.getElementById('coarf_shape').style.opacity = "1"; }
        function coarf_stop()  { document.getElementById('coarf_shape').style.opacity = "0"; }
        coarf_stop();
      </script>
    </td>
    <td valign="top" width="60%">
      <div class="paper-title">CoARF: Controllable 3D Artistic Style Transfer for Radiance Fields<span class="venue tdv">3DV 2024</span></div>
      <div class="paper-authors">
        <strong>Deheng Zhang</strong>,
        <a href="https://cfernandezlab.github.io/">Clara Fernández Labrador</a>,
        <a href="https://studios.disneyresearch.com/people/christopher-schroers/">Christopher Schroers</a>
      </div>
      <div class="paper-links">
        <a href="https://studios.disneyresearch.com/app/uploads/2024/03/CoARF_paper.pdf">Paper</a>
        <a href="https://studios.disneyresearch.com/2024/03/18/coarf-controllable-3d-artistic-style-transfer-for-radiance-fields/">Project</a>
      </div>
      <div class="paper-tldr">A novel algorithm for controllable 3D scene stylization that enables style transfer for specified objects, compositional 3D style transfer, and semantic-aware style transfer via segmentation masks and label-dependent losses.</div>
    </td>
  </tr>
</table>
</div>

<div class="paper-card">
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="14">
  <tr onmouseout="egospot_stop()" onmouseover="egospot_start()">
    <td width="40%">
      <div class="one egospot-media">
        <div class="two" id="egospot_shape">
          <video muted autoplay loop playsinline>
            <source src="/images/projects/holospot.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <img src="/images/projects/holospot.png" alt="EgoSpot teaser">
      </div>
      <script type="text/javascript">
        function egospot_start() { document.getElementById('egospot_shape').style.opacity = "1"; }
        function egospot_stop()  { document.getElementById('egospot_shape').style.opacity = "0"; }
        egospot_stop();
      </script>
    </td>
    <td valign="top" width="60%">
      <div class="paper-title"><a href="https://ganlinzhang.xyz/Holo-Spot-Page/">EgoSpot: Accessible Robot Control via Egocentric Multimodal Signals</a><span class="venue course">ICRA Workshop 2026</span></div>
      <div class="paper-authors">
        <a href="https://ganlinzhang.xyz/">Ganlin Zhang*</a>,
        <strong>Deheng Zhang*</strong>,
        <a href="https://www.linkedin.com/in/longteng-duan-566640205/">Longteng Duan*</a>,
        <a href="https://github.com/guo-han">Guo Han*</a>,
        <a href="https://yuqianfu.com/">Yuqian Fu</a>,
        <a href="https://insait.ai/dr-danda-paudel/">Danda Pani Paudel</a>,
        <a href="https://insait.ai/prof-luc-van-gool/">Luc Van Gool</a>,
        <a href="https://www.linkedin.com/in/eric-vollenweider-1b4b1616a/">Eric Vollenweider</a>
        <em>(* equal contribution)</em>
      </div>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2306.02393">Paper</a>
        <a href="https://ganlinzhang.xyz/Holo-Spot-Page/">Project</a>
        <a href="https://github.com/dehezhang2/holo-spot">Code</a>
      </div>
      <div class="paper-tldr">A mixed-reality system on HoloLens&nbsp;2 that enables users to control the Boston Dynamics Spot robot through egocentric multimodal signals — gaze, gesture, and voice — making robot teleoperation more accessible and intuitive.</div>
    </td>
  </tr>
</table>
</div>

<div class="paper-card">
<table width="100%" align="center" border="0" cellspacing="0" cellpadding="14">
  <tr>
    <td width="40%">
      <img src="/images/projects/seasonscapes.png" width="100%" alt="SeasonScapes teaser" style="border-radius:8px;">
    </td>
    <td valign="top" width="60%">
      <div class="paper-title"><a href="https://arxiv.org/abs/2605.09039">SeasonScapes: Learning Large-scale Re-lightable 3D Landscapes with Seasonal Variation from Sparse Webcams</a><span class="venue cvpr">CVPR Workshop 2026</span></div>
      <div class="paper-authors">
        Timo Kleger,
        Qi Ma,
        <strong>Deheng Zhang</strong>,
        <a href="https://insait.ai/prof-luc-van-gool/">Luc Van Gool</a>,
        <a href="https://insait.ai/dr-danda-paudel/">Danda Pani Paudel</a>
      </div>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2605.09039">Paper</a>
      </div>
      <div class="paper-tldr">A framework and dataset for large-scale relightable 3D landscapes — over 85,000 webcam images from 32 Swiss mountain locations across a full year, projected onto a 3D mesh with conditional diffusion inpainting to model seasonal appearance changes and enable physically-based relighting.</div>
    </td>
  </tr>
</table>
</div>

<h2 id="projects" class="section-heading">Selected Projects</h2>
<p style="color:#888;font-size:0.85em;margin:-0.6em 0 0.6em;">Auto-scrolls horizontally · hover to pause and explore.</p>

<div class="project-carousel">
<div class="project-track">

  <div class="project-tile">
    <div class="project-thumb">
      <img class="static" src="/images/projects/point.png" alt="Point-Based NeRF">
      <img class="anim" src="/images/projects/point.gif" alt="Point-Based NeRF animation">
    </div>
    <div class="project-info">
      <div class="project-title">Point-Based Radiance Fields for Controllable Human Motion Synthesis<span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Haitao Yu*, Peiyuan Xie*, Tianyi Zhang*</div>
      <div class="project-tldr">An animatable human avatar built on point-based primitives — static scene from Point-NeRF + deformation MLP + rotation-only ray-bending.</div>
      <div class="project-links">
        <a href="https://arxiv.org/abs/2310.03375">Paper</a>
        <a href="https://dehezhang2.github.io/Point_Based_NeRF_Editing/">Project</a>
        <a href="https://github.com/dehezhang2/Point_Based_NeRF_Editing/tree/main">Code</a>
      </div>
    </div>
  </div>

  <div class="project-tile">
    <div class="project-thumb">
      <img class="static" src="/images/projects/niceslam.png" alt="NICE-SLAM">
      <img class="anim" src="/images/projects/niceslam.gif" alt="NICE-SLAM animation">
    </div>
    <div class="project-info">
      <div class="project-title">NICE-SLAM with Adaptive Feature Grids<span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Ganlin Zhang*, Feichi Lu*, Anqi Li</div>
      <div class="project-tldr">A sparse version of NICE-SLAM bringing Voxel Hashing into the NICE-SLAM framework — surface-adaptive feature grids instead of dense initialization.</div>
      <div class="project-links">
        <a href="https://drive.google.com/file/d/1QdLE10cik3sKheQqzCWpE0Q36Qt5X_02/view?usp=sharing">Paper</a>
        <a href="https://github.com/zhangganlin/NICE-SLAM-with-Adaptive-Feature-Grids">Code</a>
      </div>
    </div>
  </div>

  <div class="project-tile">
    <div class="project-thumb">
      <img class="static" src="/images/projects/kombu.png" alt="Kombu Renderer">
      <img class="anim" src="/images/projects/kombu.gif" alt="Kombu animation">
    </div>
    <div class="project-info">
      <div class="project-title"><a href="https://dehezhang2.github.io/Kombu/">Kombu: Physically-based Renderer in C++11</a><span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Ganlin Zhang*</div>
      <div class="project-tldr">Heterogeneous volumetric rendering, bilateral-filter denoising, directional lights and instancing — culminating in our rendering-competition piece <em>Christmas on the Moon</em>.</div>
      <div class="project-links">
        <a href="https://github.com/dehezhang2/Kombu">Code</a>
        <a href="https://dehezhang2.github.io/Kombu/">Project</a>
      </div>
    </div>
  </div>

  <div class="project-tile">
    <div class="project-thumb">
      <img class="static" src="/images/projects/sava.png" alt="SAVA">
      <img class="anim" src="/images/projects/sava.gif" alt="SAVA animation">
    </div>
    <div class="project-info">
      <div class="project-title">SAVA: Style-Attention-Void-Aware Style Transfer<span class="venue thesis">Bachelor Thesis</span></div>
      <div class="project-authors"><strong>Deheng Zhang</strong></div>
      <div class="project-tldr">A self-attention mechanism with explicit mathematical meaning and a style-transfer scheme that captures the blank-leaving structure of the style image.</div>
      <div class="project-links">
        <a href="https://drive.google.com/file/d/1WPLzilrnaok1gbAuR99BYJB5Mw7cl9kb/view?usp=sharing">Paper</a>
        <a href="https://github.com/dehezhang2/Style-Attention-Void-Aware-Style-Transfer">Code</a>
      </div>
    </div>
  </div>

  <div class="project-tile">
    <div class="project-thumb">
      <img class="static" src="/images/projects/opus.png" alt="OPUS">
    </div>
    <div class="project-info">
      <div class="project-title">OPUS: Particle Swarm Using Surrogates via Bunch-Kaufman Pivoting<span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Ganlin Zhang*, Junpeng Gao*, Yu Hong*</div>
      <div class="project-tldr">Speeding up OPUS black-box optimization with a fast C++ implementation of Bunch-Kaufman pivoting.</div>
      <div class="project-links">
        <a href="https://drive.google.com/file/d/1tOvzScM-wQVdeebcPxE3DDukX2AxPnN1/view?usp=sharing">Paper</a>
        <a href="https://github.com/zhangganlin/OPUS-via-Bunch-Kaufman-pivoting-and-standard-optimization">Code</a>
      </div>
    </div>
  </div>

  <!-- ↓↓↓ Duplicate set for seamless infinite scroll (aria-hidden so SRs only read once) ↓↓↓ -->

  <div class="project-tile" aria-hidden="true">
    <div class="project-thumb">
      <img class="static" src="/images/projects/point.png" alt="">
      <img class="anim" src="/images/projects/point.gif" alt="">
    </div>
    <div class="project-info">
      <div class="project-title">Point-Based Radiance Fields for Controllable Human Motion Synthesis<span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Haitao Yu*, Peiyuan Xie*, Tianyi Zhang*</div>
      <div class="project-tldr">An animatable human avatar built on point-based primitives — static scene from Point-NeRF + deformation MLP + rotation-only ray-bending.</div>
      <div class="project-links">
        <a href="https://arxiv.org/abs/2310.03375" tabindex="-1">Paper</a>
        <a href="https://dehezhang2.github.io/Point_Based_NeRF_Editing/" tabindex="-1">Project</a>
        <a href="https://github.com/dehezhang2/Point_Based_NeRF_Editing/tree/main" tabindex="-1">Code</a>
      </div>
    </div>
  </div>

  <div class="project-tile" aria-hidden="true">
    <div class="project-thumb">
      <img class="static" src="/images/projects/niceslam.png" alt="">
      <img class="anim" src="/images/projects/niceslam.gif" alt="">
    </div>
    <div class="project-info">
      <div class="project-title">NICE-SLAM with Adaptive Feature Grids<span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Ganlin Zhang*, Feichi Lu*, Anqi Li</div>
      <div class="project-tldr">A sparse version of NICE-SLAM bringing Voxel Hashing into the NICE-SLAM framework — surface-adaptive feature grids instead of dense initialization.</div>
      <div class="project-links">
        <a href="https://drive.google.com/file/d/1QdLE10cik3sKheQqzCWpE0Q36Qt5X_02/view?usp=sharing" tabindex="-1">Paper</a>
        <a href="https://github.com/zhangganlin/NICE-SLAM-with-Adaptive-Feature-Grids" tabindex="-1">Code</a>
      </div>
    </div>
  </div>

  <div class="project-tile" aria-hidden="true">
    <div class="project-thumb">
      <img class="static" src="/images/projects/kombu.png" alt="">
      <img class="anim" src="/images/projects/kombu.gif" alt="">
    </div>
    <div class="project-info">
      <div class="project-title"><a href="https://dehezhang2.github.io/Kombu/" tabindex="-1">Kombu: Physically-based Renderer in C++11</a><span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Ganlin Zhang*</div>
      <div class="project-tldr">Heterogeneous volumetric rendering, bilateral-filter denoising, directional lights and instancing — culminating in our rendering-competition piece <em>Christmas on the Moon</em>.</div>
      <div class="project-links">
        <a href="https://github.com/dehezhang2/Kombu" tabindex="-1">Code</a>
        <a href="https://dehezhang2.github.io/Kombu/" tabindex="-1">Project</a>
      </div>
    </div>
  </div>

  <div class="project-tile" aria-hidden="true">
    <div class="project-thumb">
      <img class="static" src="/images/projects/sava.png" alt="">
      <img class="anim" src="/images/projects/sava.gif" alt="">
    </div>
    <div class="project-info">
      <div class="project-title">SAVA: Style-Attention-Void-Aware Style Transfer<span class="venue thesis">Bachelor Thesis</span></div>
      <div class="project-authors"><strong>Deheng Zhang</strong></div>
      <div class="project-tldr">A self-attention mechanism with explicit mathematical meaning and a style-transfer scheme that captures the blank-leaving structure of the style image.</div>
      <div class="project-links">
        <a href="https://drive.google.com/file/d/1WPLzilrnaok1gbAuR99BYJB5Mw7cl9kb/view?usp=sharing" tabindex="-1">Paper</a>
        <a href="https://github.com/dehezhang2/Style-Attention-Void-Aware-Style-Transfer" tabindex="-1">Code</a>
      </div>
    </div>
  </div>

  <div class="project-tile" aria-hidden="true">
    <div class="project-thumb">
      <img class="static" src="/images/projects/opus.png" alt="">
    </div>
    <div class="project-info">
      <div class="project-title">OPUS: Particle Swarm Using Surrogates via Bunch-Kaufman Pivoting<span class="venue course">Course Project</span></div>
      <div class="project-authors"><strong>Deheng Zhang*</strong>, Ganlin Zhang*, Junpeng Gao*, Yu Hong*</div>
      <div class="project-tldr">Speeding up OPUS black-box optimization with a fast C++ implementation of Bunch-Kaufman pivoting.</div>
      <div class="project-links">
        <a href="https://drive.google.com/file/d/1tOvzScM-wQVdeebcPxE3DDukX2AxPnN1/view?usp=sharing" tabindex="-1">Paper</a>
        <a href="https://github.com/zhangganlin/OPUS-via-Bunch-Kaufman-pivoting-and-standard-optimization" tabindex="-1">Code</a>
      </div>
    </div>
  </div>

</div>
</div>


<h2 id="experience" class="section-heading">Experience</h2>
<p style="color:#888;font-size:0.85em;margin:-0.6em 0 0.6em;">Auto-scrolls vertically · hover any card to pause and expand details.</p>

<div class="experience-carousel">
<ul class="experience-list">

  <li class="experience-item" tabindex="0">
    <div class="experience-logo">
      <img src="/images/logos/insait.png" alt="INSAIT" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>INSAIT</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Doctoral Researcher</div>
          <div class="experience-org"><a href="https://insait.ai/">INSAIT</a> · Sofia, Bulgaria</div>
        </div>
        <div class="experience-date">Apr 2025 – Present</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <div class="experience-desc">Working with <a href="https://insait.ai/prof-luc-van-gool/">Prof. Luc Van Gool</a> and <a href="https://insait.ai/dr-danda-paudel/">Dr. Danda Paudel</a>.</div>
        <ul>
          <li><strong>Research areas:</strong> spatial reasoning, egocentric video understanding, controllable and consistent video generation, Gaussian splatting and relighting.</li>
          <li><strong>Recent works:</strong> EgoNight (ICLR 2026), StateSpaceDiffuser (NeurIPS 2025), EgoSpot (ICRA Workshop 2026).</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item" tabindex="0">
    <div class="experience-logo">
      <img src="/images/logos/maxplanck.png" alt="Max Planck IS" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>MPI<br>IS</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Researcher (IMPRS-IS)</div>
          <div class="experience-org"><a href="https://imprs.is.mpg.de/">International Max Planck Research School for Intelligent Systems</a> · Tübingen, Germany</div>
        </div>
        <div class="experience-date">Sept 2024 – Mar 2025</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <ul>
          <li><strong>Research areas:</strong> 3D scene understanding, Gaussian splatting.</li>
          <li><strong>Teaching service:</strong> teaching assistant for <em>Introduction to Computer Graphics</em>; thesis supervisor; cluster server management.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item" tabindex="0">
    <div class="experience-logo">
      <img src="/images/logos/eth.png" alt="ETH Zürich" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>ETH<br>Zürich</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Master Thesis Researcher · VLG</div>
          <div class="experience-org"><a href="https://vlg.inf.ethz.ch/">Computer Vision and Learning Group, ETH Zürich</a> · Switzerland</div>
        </div>
        <div class="experience-date">Sept 2023 – Apr 2024</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <div class="experience-desc">Master thesis on inverse rendering and relighting of glossy objects, building a relightable signed-distance-field representation.</div>
        <ul>
          <li><strong>Supervisors:</strong> <a href="https://vlg.inf.ethz.ch/team/Prof-Dr-Siyu-Tang.html">Prof. Siyu Tang</a>, <a href="https://vlg.inf.ethz.ch/team/Dr-Sergey-Prokudin.html">Dr. Sergey Prokudin</a>.</li>
          <li><strong>Outcome:</strong> RISE-SDF, accepted to 3DV 2025; thesis grade 6.00 / 6.00.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item" tabindex="0">
    <div class="experience-logo">
      <img src="/images/logos/disney.png" alt="Disney Research" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>Disney<br>Research</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Semester Project Researcher</div>
          <div class="experience-org"><a href="https://studios.disneyresearch.com/">Disney Research | Studios</a> · Zürich, Switzerland</div>
        </div>
        <div class="experience-date">Dec 2022 – May 2023</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <div class="experience-desc">Developed CoARF — a controllable 3D artistic style-transfer method for radiance fields using segmentation masks and a semantic-aware nearest-neighbor matching algorithm.</div>
        <ul>
          <li><strong>Supervisors:</strong> <a href="https://cfernandezlab.github.io/">Dr. Clara Fernández Labrador</a>, <a href="https://studios.disneyresearch.com/people/christopher-schroers/">Dr. Christopher Schroers</a>; overseen by <a href="https://inf.ethz.ch/de/personen/person-detail.mgross.html">Prof. Markus Gross</a>.</li>
          <li><strong>Outcome:</strong> CoARF, accepted to 3DV 2024 (also filed as a patent).</li>
        </ul>
      </div>
    </div>
  </li>

  <!-- ↓↓↓ Duplicate set for seamless infinite scroll ↓↓↓ -->

  <li class="experience-item" aria-hidden="true">
    <div class="experience-logo">
      <img src="/images/logos/insait.png" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>INSAIT</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Doctoral Researcher</div>
          <div class="experience-org">INSAIT · Sofia, Bulgaria</div>
        </div>
        <div class="experience-date">Apr 2025 – Present</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <div class="experience-desc">Working with Prof. Luc Van Gool and Dr. Danda Paudel.</div>
        <ul>
          <li><strong>Research areas:</strong> spatial reasoning, egocentric video understanding, controllable and consistent video generation, Gaussian splatting and relighting.</li>
          <li><strong>Recent works:</strong> EgoNight (ICLR 2026), StateSpaceDiffuser (NeurIPS 2025), EgoSpot (ICRA Workshop 2026).</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item" aria-hidden="true">
    <div class="experience-logo">
      <img src="/images/logos/maxplanck.png" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>MPI<br>IS</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Researcher (IMPRS-IS)</div>
          <div class="experience-org">Max Planck Research School for Intelligent Systems · Tübingen, Germany</div>
        </div>
        <div class="experience-date">Sept 2024 – Mar 2025</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <ul>
          <li><strong>Research areas:</strong> 3D scene understanding, Gaussian splatting.</li>
          <li><strong>Teaching service:</strong> teaching assistant for <em>Introduction to Computer Graphics</em>; thesis supervisor; cluster server management.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item" aria-hidden="true">
    <div class="experience-logo">
      <img src="/images/logos/eth.png" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>ETH<br>Zürich</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Master Thesis Researcher · VLG</div>
          <div class="experience-org">Computer Vision and Learning Group, ETH Zürich · Switzerland</div>
        </div>
        <div class="experience-date">Sept 2023 – Apr 2024</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <div class="experience-desc">Master thesis on inverse rendering and relighting of glossy objects, building a relightable signed-distance-field representation.</div>
        <ul>
          <li><strong>Supervisors:</strong> Prof. Siyu Tang, Dr. Sergey Prokudin.</li>
          <li><strong>Outcome:</strong> RISE-SDF, accepted to 3DV 2025; thesis grade 6.00 / 6.00.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item" aria-hidden="true">
    <div class="experience-logo">
      <img src="/images/logos/disney.png" alt="" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>Disney<br>Research</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Semester Project Researcher</div>
          <div class="experience-org">Disney Research | Studios · Zürich, Switzerland</div>
        </div>
        <div class="experience-date">Dec 2022 – May 2023</div>
      </div>
      <span class="expand-hint">hover to expand</span>
      <div class="experience-details">
        <div class="experience-desc">Developed CoARF — a controllable 3D artistic style-transfer method for radiance fields using segmentation masks and a semantic-aware nearest-neighbor matching algorithm.</div>
        <ul>
          <li><strong>Supervisors:</strong> Dr. Clara Fernández Labrador, Dr. Christopher Schroers; overseen by Prof. Markus Gross.</li>
          <li><strong>Outcome:</strong> CoARF, accepted to 3DV 2024 (also filed as a patent).</li>
        </ul>
      </div>
    </div>
  </li>

</ul>
</div>

<h2 id="services" class="section-heading">Academic Services</h2>
<ul class="services-list">
  <li><strong>Conference Reviewer</strong> · ICML 2026 <span class="role-tag">Gold Reviewer</span> · NeurIPS 2026 · CVPR 2026</li>
  <li><strong>Journal Reviewer</strong> · IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)</li>
</ul>

<h2 id="visitors" class="section-heading">Visitor Map</h2>

<div class="visitors-card">
  <div class="visitors-card-header">
    <span class="dot"></span>
    <span>Where readers come from</span>
  </div>
  <div class="visitors-map-frame">
    <div id="visitor-geochart"></div>
  </div>
  <div class="visitors-legend">
    <span>Fewer<span class="gradient-bar"></span>More visits</span>
    <span style="margin-left:auto;color:#888;font-size:0.85em;">Powered by Google Charts · seed data, updated periodically</span>
  </div>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
(function () {
  /* Seed visitor distribution. Update these counts by copying the
     "Audience → Geo → Country" table from your Google Analytics dashboard
     (or your hosting provider's analytics) once in a while.
     Country codes are ISO 3166-1 alpha-2. */
  var COUNTRY_VISITS = [
    ['Country', 'Visitors'],
    ['CH', 142], ['BG',  89], ['CN',  76], ['US',  64], ['DE',  38],
    ['HK',  28], ['GB',  22], ['FR',  19], ['JP',  17], ['CA',  13],
    ['IT',  11], ['ES',   9], ['IN',   8], ['NL',   7], ['BR',   6],
    ['AU',   5], ['KR',   5], ['SG',   4], ['SE',   4], ['BE',   3],
    ['AT',   3], ['PL',   3], ['CZ',   2], ['DK',   2], ['FI',   2],
    ['MX',   2], ['ZA',   2], ['IE',   2], ['TR',   2], ['AE',   1]
  ];

  function renderGeoChart() {
    var container = document.getElementById('visitor-geochart');
    if (!container || typeof google === 'undefined' || !google.visualization) return;

    var data = google.visualization.arrayToDataTable(COUNTRY_VISITS);
    var options = {
      backgroundColor:     'transparent',
      datalessRegionColor: '#e6ebf2',
      defaultColor:        '#e6ebf2',
      colorAxis: {
        colors: ['#dfeaff', '#7aa7e4', '#2462c4', '#1a3f7e']
      },
      legend: {
        textStyle: { color: '#555', fontSize: 12, fontName: 'Inter' }
      },
      tooltip: {
        textStyle: { color: '#1a1a1a', fontSize: 13, fontName: 'Inter' },
        trigger:   'focus'
      },
      keepAspectRatio: false
    };
    var chart = new google.visualization.GeoChart(container);
    chart.draw(data, options);
  }

  function loadAndDraw() {
    google.charts.load('current', { packages: ['geochart'] });
    google.charts.setOnLoadCallback(renderGeoChart);
  }

  if (typeof google !== 'undefined' && google.charts) {
    loadAndDraw();
  } else {
    /* loader.js sets window.google; wait if it isn't ready yet */
    var poll = setInterval(function () {
      if (typeof google !== 'undefined' && google.charts) {
        clearInterval(poll);
        loadAndDraw();
      }
    }, 60);
  }

  /* Re-render on resize so the SVG keeps filling the card width */
  var resizeT;
  window.addEventListener('resize', function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(renderGeoChart, 180);
  });
})();
</script>
</div>
