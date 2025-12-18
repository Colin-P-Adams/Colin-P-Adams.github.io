---
layout: single
permalink: /testing/
title: "Home"
show_title: false
author_profile: false
classes: wide
redirect_from:
  - /about/
  - /about.html
  - /bio/
---

<style>
  .page__title { display: none !important; }

  .page {
    max-width: none !important;
    width: 100% !important;
  }

  .home-wrap {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
  }

  /* IMPORTANT:
     Default to "mobile/tablet" stacked layout.
     Only switch to 2-column on true desktop-like devices (fine pointer + hover). */
  .home-grid {
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
    justify-content: center;
  }

  /* Desktop-only: 2 columns (prevents iPad landscape from using desktop layout) */
  @media (min-width: 1100px) and (hover: hover) and (pointer: fine) {
    .home-grid {
      flex-direction: row;
      gap: 44px;
      align-items: center;
      justify-content: flex-start;
    }

    /* Desktop-only: your slight right nudge */
    .home-wrap {
      transform: translateX(40px);
    }
  }

  .home-name {
    text-align: center;
    margin: 0 0 28px 0;
    font-size: 3.2em;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    .home-name { font-size: 2.3em; }
  }

  .home-photo {
    flex: none;
    max-width: 520px;
    width: 92%;
    text-align: center;
  }

  /* Desktop photo size (only when in 2-column mode) */
  @media (min-width: 1100px) and (hover: hover) and (pointer: fine) {
    .home-photo {
      flex: 0 0 360px;
      max-width: 360px;
      width: auto;
    }
  }

  .home-photo img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    padding: 5px;
    border: 1px solid #ccc;
  }

  .home-bio {
    width: 92%;
    text-align: center;
  }

  /* Desktop bio sizing (only when in 2-column mode) */
  @media (min-width: 1100px) and (hover: hover) and (pointer: fine) {
    .home-bio {
      flex: 1 1 680px;
      width: auto;
    }
  }

  .home-bio p {
    margin: 0 auto 1.2em auto;
    max-width: 760px;
  }
</style>

<div class="home-wrap">
  <h1 class="home-name">Colin P. Adams</h1>

  <div class="home-grid">
    <div class="home-photo">
      <img src="/images/Colin-Adams-2025-edited.jpg" alt="Colin P. Adams">
    </div>

  <div class="home-bio">
      <p>
        I am a third-year economics Ph.D. student and Charles and Persis Rockwood Fellow at Florida State University. I expect to graduate from FSU in May 2028.
      </p>
      <p>
        My research interests are in crime, public, and labor economics where I use applied econometric methods to conduct causal inference.
      </p>
      <p>
        I have teaching experience across a range of undergraduate and graduate economics courses, serving as both an instructor of record and a teaching assistant.
      </p>
      <p>
        Previously, I graduated from Georgia College &amp; State University with a B.S. in Economics and Finance.
        <a href="https://frontpage.gcsu.edu/node/14695" target="_blank" rel="noopener">Here</a> is an article about me from my time at GC&amp;SU.
      </p>

  <div class="button-container" style="margin-top: 18px;">
        <a href="/CV.pdf" class="icon-button" target="_blank" rel="noopener">
          <i class="fas fa-file-alt"></i> CV
        </a>
        <a href="https://scholar.google.com/citations?user=JVDSOfEAAAAJ" class="icon-button" target="_blank" rel="noopener">
          <i class="ai ai-google-scholar"></i> Google Scholar
        </a>
        <a href="https://www.researchgate.net/profile/Colin-Adams-3" class="icon-button" target="_blank" rel="noopener">
          <i class="fab fa-researchgate"></i> ResearchGate
        </a>
        <a href="https://orcid.org/0009-0002-3490-5927" class="icon-button" target="_blank" rel="noopener">
          <i class="ai ai-orcid"></i> ORCID
        </a>
        <a href="https://www.linkedin.com/in/Colin-Adams/" class="icon-button" target="_blank" rel="noopener">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>

  <a href="https://x.com/Colin_P_Adams" class="icon-button" target="_blank" rel="noopener"
           style="display:flex;align-items:center;justify-content:center;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="18" height="18" fill="currentColor" aria-label="X">
            <path d="M714 519L1160 0H1049L663 450 381 0H0l463 684L0 1227h111l370-429 300 429h481L714 519zM583 715l-43-61-340-479h147l274 386 43 61 356 503H871L583 715z"/>
          </svg>
        </a>

  <a href="https://bsky.app/profile/colinpadams.bsky.social" class="icon-button" target="_blank" rel="noopener"
           style="display:flex;align-items:center;justify-content:center;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-label="Bluesky">
            <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103/.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
