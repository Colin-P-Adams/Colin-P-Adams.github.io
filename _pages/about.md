---
permalink: /
title: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .about-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
  }

  .about-image {
    flex: 1;
    max-width: 500px;
    text-align: center;
  }

  .about-text {
    flex: 2;
    min-width: 300px;
    text-align: center;
  }

  .about-text p {
    text-align: center;
    margin: 0 auto 1.2em auto;
    max-width: 700px;
  }

  /* Stack layout on mobile + portrait tablets */
  @media (max-width: 768px), (orientation: portrait) {
    .about-container {
      flex-direction: column;
      align-items: center;
    }

    .about-image,
    .about-text {
      width: 90%;
      max-width: none;
    }
  }

  /* Stack layout + proportionally scaled image on horizontal tablets */
  @media screen and (max-device-width: 1024px) and (orientation: landscape) {
    .about-container {
      flex-direction: column;
      align-items: center;
    }

    .about-image {
      width: auto;
      max-width: 90%;
    }

    .about-image img {
      max-height: 400px !important;
      width: auto !important;
      height: auto !important;
      aspect-ratio: auto;
      display: block;
      margin: 0 auto;
    }

    .about-text {
      width: 90%;
      max-width: none;
    }
  }

  /* Stack layout + scaled image on vertical tablets */
  @media screen and (max-device-width: 1024px) and (orientation: portrait) {
  .about-image img {
    max-height: 550px !important; /* ← adjust to your liking */
    width: auto !important;
    height: auto !important;
    aspect-ratio: auto;
    display: block;
    margin: 0 auto;
  }
}

</style>

<section id="about-home">

  <!-- Name -->
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 2.5em; margin: 0;">Colin P. Adams</h1>
  </div>

  <!-- Main Layout: Image + Text -->
  <div class="about-container">

  <!-- Profile Picture -->
  <div class="about-image">
      <img src="/images/Colin-Adams-2025-edited.jpg" alt="Colin P. Adams" 
           style="width: 100%; height: auto; border-radius: 15px; 
                  padding: 5px; border: 1px solid #ccc;">
    </div>

  <!-- Bio + Buttons -->
  <div class="about-text" id="about-me">
      <p>
        I am an economics Ph.D. student and Charles and Persis Rockwood Fellow at Florida State University. I expect to graduate from FSU in May 2028.
        I am an applied microeconomist with research interests in crime, public, and labor economics.
      </p>
      <p>
        Previously, I graduated from Georgia College & State University with a B.S. in Economics and Finance.
        <a href="https://frontpage.gcsu.edu/node/14695" target="_blank">Here</a> is an article about me from my time at GC&SU.
      </p>

<!-- Buttons -->
<div class="button-container" style="margin-top: 20px;">
  <a href="/CV.pdf" class="icon-button" target="_blank">
    <i class="fas fa-file-alt"></i> CV
  </a>
  <a href="https://scholar.google.com/citations?user=JVDSOfEAAAAJ" class="icon-button" target="_blank">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
  <a href="https://www.researchgate.net/profile/Colin-Adams-3" class="icon-button" target="_blank">
    <i class="fab fa-researchgate"></i> ResearchGate
  </a>
  <a href="https://orcid.org/0009-0002-3490-5927" class="icon-button" target="_blank">
    <i class="ai ai-orcid"></i> ORCID
  </a>
  <a href="https://www.linkedin.com/in/colin-p-adams/" class="icon-button" target="_blank">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>

  <!-- X -->
  <a href="https://x.com/Colin_P_Adams" class="icon-button" target="_blank" style="display: flex; align-items: center; justify-content: center;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="18" height="18" fill="currentColor" aria-label="X">
      <path d="M714 519L1160 0H1049L663 450 381 0H0l463 684L0 1227h111l370-429 
        300 429h481L714 519zM583 715l-43-61-340-479h147l274 386 
        43 61 356 503H871L583 715z"/>
    </svg>
  </a>

  <!-- Bluesky -->
  <a href="https://bsky.app/profile/colinpadams.bsky.social" class="icon-button" target="_blank" style="display: flex; align-items: center; justify-content: center;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-label="Bluesky">
      <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
    </svg>
  </a>
</div>



