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
<a href="https://bsky.app/profile/colinpadams.bsky.social" class="icon-button" target="_blank" style="display: flex; align-items: center; justify-content: center;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 569 512" width="18" height="18" fill="currentColor">
    <path d="M284.4 172.9C350.8 88.8 410.3 0 481.3 0c52.4 0 87.7 34.8 87.7 80.4 0 59.3-69.5 109.4-162.1 149.8 84.2-15.7 162.1-13.2 162.1 57.8 0 106.5-155.4 205.2-284.6 224 129.2-18.8 284.6-117.5 284.6-224 0-71-77.9-73.5-162.1-57.8 92.6-40.4 162.1-90.5 162.1-149.8C569 34.8 533.7 0 481.3 0c-71 0-130.5 88.8-196.9 172.9C218 88.8 158.5 0 87.5 0 35.1 0 0 34.8 0 80.4c0 59.3 69.5 109.4 162.1 149.8C77.9 214.5 0 212 0 283c0 106.5 155.4 205.2 284.6 224-129.2-18.8-284.6-117.5-284.6-224 0-71 77.9-73.5 162.1-57.8C69.5 189.8 0 139.7 0 80.4 0 34.8 35.1 0 87.5 0c71 0 130.5 88.8 196.9 172.9z"/>
  </svg>
</a>
</div>

