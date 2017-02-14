import { injectGlobal } from 'styled-components'

injectGlobal`
  :root {
    overflow-y: auto;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Kievit', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 300;
    line-height: 1.5em;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  ::selection {
    background: white;
    color: black;
  }

  :focus {
    outline-color: #ffd72e;
  }

  /* Typography
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 300; }
  h1 { font-size: 4.0rem; line-height: 1.2;  /*letter-spacing: -.1rem;*/ }
  h2 { font-size: 3.6rem; line-height: 1.25; /*letter-spacing: -.1rem;*/ }
  h3 { font-size: 3.0rem; line-height: 1.3;  /*letter-spacing: -.1rem;*/ }
  h4 { font-size: 2.4rem; line-height: 1.35; /*letter-spacing: -.08rem;*/ }
  h5 { font-size: 1.8rem; line-height: 1.5;  /*letter-spacing: -.05rem;*/ }
  h6 { font-size: 1.5rem; line-height: 1.6;  /*letter-spacing: 0;*/ }

  /* Larger than phablet */
  @media (min-width: 550px) {
    h1 { font-size: 5.0rem; }
    h2 { font-size: 4.2rem; }
    h3 { font-size: 3.6rem; }
    h4 { font-size: 3.0rem; }
    h5 { font-size: 2.4rem; }
    h6 { font-size: 1.5rem; }
  }

  p {
    margin-top: 0;
  }

  a, a:visited {
    color: black;
  }

  /* Input & Buttons
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  button {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    border-radius: 3px;
    margin: 0 auto;
  }

  .align-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Leaflet
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  .leaflet-container {
    background: none;
  }

  .external-link,
  .external-links a[href^="http://"] {
    background-image: url(images/external-link.svg);
    background-position: right top;
    background-repeat: no-repeat;
    background-size: 14px;
    padding-right: 16px;
  }

 .external-link.white,
  .external-links .white a[href^="http://"] {
    background-image: url(images/external-link-white.svg);
  }
`
