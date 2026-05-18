---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>
/* ========== Inherit homepage typography ========== */
body, .page, .page__content, .author__name, .author__bio,
.author__urls, .section-heading,
.cv-pub-list, .cv-skill-grid, .cv-meta, .cv-activity,
.experience-title, .experience-org, .experience-date,
.btn, h1, h2, h3, h4, h5, h6 {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
               "Roboto", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page__content { font-size: 15.5px; line-height: 1.6; color: #2b2b2b; }
.page__content p { margin: 0.6em 0 1em; }
.page__content a { color: #2462c4; text-decoration: none; }
.page__content a:hover { text-decoration: underline; }
.page__content strong { font-weight: 600; color: #1a1a1a; }

.page__title {
  font-weight: 800 !important;
  letter-spacing: -0.02em !important;
  font-size: 2.1em !important;
  margin-bottom: 0.3em !important;
}

/* ========== Left sidebar — match homepage ========== */
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
.sidebar .author__bio { color: #5b5b5b; font-size: 0.95em; margin-top: 0.2em; }
.sidebar .btn.btn--inverse { display: none; }
.sidebar .author__urls.social-icons { padding-left: 0; margin-top: 0.8em; }
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

/* ========== Section headings ========== */
.section-heading {
  font-weight: 700;
  font-size: 1.45em;
  letter-spacing: -0.015em;
  padding-bottom: 8px;
  margin-top: 1.8em;
  margin-bottom: 0.9em;
  color: #1a1a1a;
  position: relative;
}
.section-heading::after {
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 36px;
  height: 3px;
  background: #2462c4;
  border-radius: 2px;
}
.section-heading::before {
  content: "";
  position: absolute;
  left: 36px; right: 0;
  bottom: 1px;
  height: 1px;
  background: #ececec;
}

/* ========== Contact line ========== */
.cv-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 0.92em;
  color: #555;
  margin: 0.3em 0 0.6em;
}
.cv-meta span { display: inline-flex; align-items: center; gap: 6px; }
.cv-meta i { color: #6c757d; }
.cv-download {
  display: inline-block;
  margin-top: 6px;
  padding: 5px 12px;
  border: 1px solid #2462c4;
  border-radius: 14px;
  font-size: 0.85em;
  font-weight: 500;
  color: #2462c4;
  text-decoration: none !important;
  transition: all 0.15s;
}
.cv-download:hover {
  background: #2462c4;
  color: #fff;
  text-decoration: none !important;
}

/* ========== Venue badges (shared with homepage) ========== */
.venue {
  display: inline-block;
  padding: 2px 9px;
  margin-left: 8px;
  border-radius: 12px;
  font-size: 0.68em;
  font-weight: 700;
  color: #fff;
  background: #3a86ff;
  vertical-align: middle;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}
.venue.iclr    { background: #d33f49; }
.venue.neurips { background: #6f42c1; }
.venue.tdv     { background: #0d9488; }
.venue.cvpr    { background: #1b7e3a; }
.venue.icra    { background: #1565c0; }
.venue.course  { background: #6c757d; }

/* ========== Publication list ========== */
.cv-pub-list { list-style: none; padding: 0; margin: 0; }
.cv-pub-list li {
  padding: 12px 0;
  border-bottom: 1px dashed #ececec;
  font-size: 0.95em;
  line-height: 1.55;
}
.cv-pub-list li:last-child { border-bottom: none; }
.cv-pub-list .pub-title { font-weight: 600; color: #1a1a1a; }
.cv-pub-list .pub-meta { color: #555; font-size: 0.92em; }
.cv-pub-list .pub-links { margin-top: 4px; }
.cv-pub-list .pub-links a {
  display: inline-block;
  margin-right: 4px;
  padding: 1px 9px;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  font-size: 0.8em;
  color: #2462c4;
  text-decoration: none !important;
  transition: all 0.15s;
}
.cv-pub-list .pub-links a:hover {
  background: #2462c4;
  color: #fff;
  border-color: #2462c4;
}

/* ========== Experience / Education cards (mirror homepage) ========== */
.experience-list { list-style: none; padding: 0; margin: 0; }
.experience-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 16px 20px;
  margin-bottom: 12px;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05),
              0 0 0 1px rgba(0,0,0,0.02);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.experience-item:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08),
              0 0 0 1px rgba(0,0,0,0.04);
  transform: translateY(-1px);
}
.experience-logo {
  flex: 0 0 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
  padding: 6px;
  overflow: hidden;
}
.experience-logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
.experience-logo-fallback {
  font-weight: 700;
  font-size: 0.78em;
  color: #6c757d;
  text-align: center;
  line-height: 1.15;
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
  font-size: 0.98em;
  color: #1a1a1a;
  line-height: 1.4;
}
.experience-org { color: #444; font-size: 0.9em; margin-top: 2px; }
.experience-date {
  color: #6b6b6b;
  font-size: 0.85em;
  font-weight: 500;
  white-space: nowrap;
  font-feature-settings: "tnum";
}
.experience-details ul {
  margin: 8px 0 0;
  padding-left: 1.1em;
  color: #555;
  font-size: 0.88em;
  line-height: 1.55;
}
.experience-details ul li { margin: 2px 0; }
.experience-details strong { color: #1a1a1a; font-weight: 600; }

/* ========== Skills grid ========== */
.cv-skill-grid {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 10px 16px;
  align-items: baseline;
  margin: 0;
  padding: 0;
}
.cv-skill-grid dt { font-weight: 600; color: #1a1a1a; font-size: 0.93em; }
.cv-skill-grid dd { margin: 0; color: #444; font-size: 0.94em; }
.cv-tag {
  display: inline-block;
  padding: 2px 9px;
  margin: 2px 3px 2px 0;
  border-radius: 12px;
  background: #eef3fb;
  color: #2462c4;
  font-size: 0.8em;
  font-weight: 500;
}

/* ========== Honors & Awards ========== */
.honors-list { list-style: none; padding: 0; margin: 0; }
.honors-list li {
  padding: 8px 0;
  border-bottom: 1px dashed #ececec;
  display: flex;
  gap: 14px;
  align-items: baseline;
  font-size: 0.93em;
}
.honors-list li:last-child { border-bottom: none; }
.honors-list .year {
  flex: 0 0 100px;
  color: #6b6b6b;
  font-size: 0.86em;
  font-weight: 500;
  font-feature-settings: "tnum";
}
.honors-list .award { flex: 1; color: #222; }
@media (max-width: 600px) {
  .honors-list li { flex-wrap: wrap; }
  .honors-list .year { flex: 0 0 100%; }
}

/* ========== Activities ========== */
.cv-activity { list-style: none; padding: 0; margin: 0; }
.cv-activity li {
  padding: 6px 0;
  font-size: 0.95em;
  border-bottom: 1px dashed #ececec;
}
.cv-activity li:last-child { border-bottom: none; }
.cv-activity strong { color: #1a1a1a; }

/* ========== Responsive: tablet (≤ 900px) ========== */
@media (max-width: 900px) {
  .page__title { font-size: 1.85em !important; }
  .section-heading { font-size: 1.3em; margin-top: 1.5em; }
  .sidebar .author__avatar img { max-width: 150px; }
  .sidebar .author__name { font-size: 1.3em; }
  .experience-item { padding: 14px 16px; gap: 14px; }
  .experience-logo { flex: 0 0 56px; height: 56px; }
}

/* ========== Responsive: phone (≤ 600px) ========== */
@media (max-width: 600px) {
  .page__title { font-size: 1.55em !important; }
  .section-heading { font-size: 1.2em; margin-top: 1.3em; }
  .page__content { font-size: 15px; }

  .sidebar .author__avatar img { max-width: 120px; }
  .sidebar .author__name { font-size: 1.15em; }

  /* Contact line: each item on its own row */
  .cv-meta {
    flex-direction: column;
    gap: 4px;
    font-size: 0.9em;
  }

  /* Skills grid: collapse to single column */
  .cv-skill-grid { grid-template-columns: 1fr; gap: 4px 0; }
  .cv-skill-grid dt { margin-top: 8px; }
  .cv-skill-grid dt:first-of-type { margin-top: 0; }

  /* Experience / education cards on phone */
  .experience-item {
    padding: 12px 14px;
    gap: 12px;
    align-items: flex-start;
  }
  .experience-logo { flex: 0 0 48px; height: 48px; padding: 4px; }
  .experience-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
  .experience-title { font-size: 0.94em; line-height: 1.35; }
  .experience-org   { font-size: 0.85em; }
  .experience-date  { font-size: 0.8em; margin-top: 2px; }
  .experience-details ul { font-size: 0.85em; padding-left: 1em; }

  /* Honors list */
  .honors-list li { flex-wrap: wrap; gap: 4px; padding: 7px 0; }
  .honors-list .year { flex: 0 0 100%; font-size: 0.82em; }

  /* Tag chips */
  .cv-tag { font-size: 0.78em; padding: 2px 8px; }
}
</style>

<div class="cv-meta">
  <span><i class="fas fa-fw fa-envelope"></i> <a href="mailto:deheng.zhang@insait.ai">deheng.zhang@insait.ai</a></span>
  <span><i class="fas fa-fw fa-map-marker-alt"></i> Sofia, Bulgaria</span>
  <span><i class="fas fa-fw fa-globe"></i> <a href="https://dehezhang2.github.io/">dehezhang2.github.io</a></span>
</div>

<h2 class="section-heading">Education</h2>
<ul class="experience-list">

  <li class="experience-item">
    <div class="experience-logo">
      <img src="/images/logos/eth.png" alt="ETH Zürich" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>ETH<br>Zürich</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">M.S. in Computer Science — Visual Computing Track</div>
          <div class="experience-org"><a href="https://ethz.ch/de.html">ETH Zürich</a> · Switzerland</div>
        </div>
        <div class="experience-date">Sept 2021 – Apr 2024</div>
      </div>
      <div class="experience-details">
        <ul>
          <li><strong>GPA:</strong> 5.67 / 6.00 cumulative · 5.83 / 6.00 major · 6.00 / 6.00 thesis.</li>
          <li><strong>Top courses (6.00 / 6.00):</strong> Shape Modeling and Geometry Processing, Digital Human.</li>
          <li><strong>Other graded 5.75:</strong> Computer Graphics, Computer Vision, Mathematical Foundation for CV/CG, 3D Vision, Mixed Reality, Advanced Machine Learning.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item">
    <div class="experience-logo">
      <img src="/images/logos/cityu.png" alt="CityU HK" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>CityU<br>HK</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">B.S. in Computer Science — AI Stream, First Class Honours</div>
          <div class="experience-org"><a href="https://www.cityu.edu.hk/">City University of Hong Kong</a> · Hong Kong SAR</div>
        </div>
        <div class="experience-date">Sept 2017 – July 2021</div>
      </div>
      <div class="experience-details">
        <ul>
          <li><strong>GPA:</strong> 3.94 / 4.30 (Top 5% of cohort).</li>
          <li><strong>Honors:</strong> CityU Scholarship (HKD 40k / year, 2018–2020); Dean's List (multiple semesters); IT Professional Placement Award (2020); Certificate of Research Mentoring Scheme (2019).</li>
        </ul>
      </div>
    </div>
  </li>

</ul>

<h2 class="section-heading">Work Experience</h2>
<ul class="experience-list">

  <li class="experience-item">
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
      <div class="experience-details">
        <ul>
          <li><strong>Research areas:</strong> spatial reasoning, egocentric video understanding, controllable and consistent video generation, Gaussian splatting and relighting.</li>
          <li><strong>Advisors:</strong> <a href="https://insait.ai/prof-luc-van-gool/">Prof. Luc Van Gool</a>, <a href="https://insait.ai/dr-danda-paudel/">Dr. Danda Paudel</a>.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item">
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
      <div class="experience-details">
        <ul>
          <li><strong>Research areas:</strong> 3D scene understanding, Gaussian splatting.</li>
          <li><strong>Teaching service:</strong> TA for <em>Introduction to Computer Graphics</em>; thesis supervisor; cluster server management.</li>
        </ul>
      </div>
    </div>
  </li>

  <li class="experience-item">
    <div class="experience-logo">
      <img src="/images/logos/siemens.png" alt="Siemens" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=experience-logo-fallback>Siemens</div>'">
    </div>
    <div class="experience-content">
      <div class="experience-row">
        <div>
          <div class="experience-title">Software Engineer — MAC Intern</div>
          <div class="experience-org">Siemens (Hong Kong) Limited · Hong Kong</div>
        </div>
        <div class="experience-date">July 2019 – Apr 2020</div>
      </div>
      <div class="experience-details">
        <ul>
          <li>Built a full-stack mobile management application on the MERN stack and deployed both app and database.</li>
          <li>Implemented a Hyperledger Fabric blockchain solution for smart-city parking at Hong Kong Science &amp; Technology Park.</li>
          <li>Presented Siemens' cloud platform at the <a href="https://riseconf.com/blog/rise-2019-numbers">2019 RISE conference</a> in Hong Kong.</li>
        </ul>
      </div>
    </div>
  </li>

</ul>

<h2 class="section-heading">Honors &amp; Awards</h2>
<ul class="honors-list">
  <li><span class="year">2021</span><span class="award">First Class Honours, B.S. Computer Science — Top 5% of the cohort, CityU Hong Kong.</span></li>
  <li><span class="year">2020</span><span class="award">IT Professional Placement Award, City University of Hong Kong.</span></li>
  <li><span class="year">2019 – 2020</span><span class="award">Top 25, 2019 ICPC Asia Hong Kong Regional Contest (representing CityU).</span></li>
  <li><span class="year">2019</span><span class="award">Certificate of Research Mentoring Scheme, City University of Hong Kong.</span></li>
  <li><span class="year">2018 – 2020</span><span class="award">CityU Scholarship (HKD 40,000 / year).</span></li>
  <li><span class="year">2018 – 2020</span><span class="award">Dean's List, College of Engineering, CityU Hong Kong (multiple semesters).</span></li>
</ul>

<h2 class="section-heading">Extracurricular Activities</h2>
<ul class="cv-activity">
  <li><strong>Contest:</strong> Top 25 in 2019 ICPC Asia Hong Kong Regional Contest (representing CityU).</li>
  <li><strong>Volunteer:</strong> Grassland Protection Volunteer Project in Shangri-La; Hall 10 Volunteer Trip in Korea.</li>
</ul>

<h2 class="section-heading">Skills &amp; Interests</h2>
<dl class="cv-skill-grid">
  <dt>Languages</dt>
  <dd>Chinese (Native) · English (TOEFL 103) · German (Beginner)</dd>

  <dt>Programming</dt>
  <dd>
    <span class="cv-tag">Python</span><span class="cv-tag">PyTorch</span><span class="cv-tag">C++</span><span class="cv-tag">C#</span><span class="cv-tag">Java</span><span class="cv-tag">HTML/CSS/JS</span><span class="cv-tag">MERN</span>
  </dd>

  <dt>3D &amp; Tools</dt>
  <dd>
    <span class="cv-tag">Blender</span><span class="cv-tag">Unity</span><span class="cv-tag">LaTeX</span><span class="cv-tag">Markdown</span><span class="cv-tag">Git</span><span class="cv-tag">Claude</span><span class="cv-tag">Codex</span>
  </dd>

  <dt>Interests</dt>
  <dd>Rendering · Photography · Hiking · Skiing · Video Games · Fingerstyle guitar · Table Tennis</dd>
</dl>
