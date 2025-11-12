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
  <a href="https://x.com/Colin_P_Adams" class="icon-button" target="_blank" style="display: flex; align-items: center; justify-content: center;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="18" height="18" fill="currentColor">
      <path d="M714 519L1160 0H1049L663 450 381 0H0l463 684L0 1227h111l370-429 
        300 429h481L714 519zM583 715l-43-61-340-479h147l274 386 
        43 61 356 503H871L583 715z"/>
    </svg>
  </a>
  <a href="https://bsky.app/profile/colin-p-adams.bsky.social" class="icon-button" target="_blank" style="display: flex; align-items: center; justify-content: center;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="18" height="18" fill="currentColor">
      <path d="M32 2c4.8 5.9 12.8 18.4 19 21.9 4.7 2.7 10.3 1.4 11.7-3.3 1-3.9-1.6-7.2-4.7-8.0 4.1 1.1 6.9 5.1 5.5 9.3-1.6 5.4-8.2 7.4-13.6 4.7-5.0-2.7-9.9-9.3-15.1-16.8-5.4 7.5-10.4 14.1-15.6 16.8-5.6 2.8-12.5 .7-14.1-4.9-1.3-4.4 1.5-8.5 5.5-9.6-3.0 0.7-5.6 3.7-4.7 8.0 1.4 4.7 7.0 6.0 11.7 3.3 6.2-3.5 14.2-16.0 19-21.9zM16 33c5.3 .2 10.6 3.3 16.6 9.0 5.4-6.0 10.2-9.4 16.0-9.5 7.0-.3 12.4 5.9 8.7 13.3-3.2 6.5-8.2 12.7-19.6 23.4-11.4-10.7-16.4-16.9-19.6-23.4-3.7-7.4 1.7-13.6 8.7-13.3z"/>
    </svg>
  </a>
</div>

