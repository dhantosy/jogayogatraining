'use client'

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  ::selection {
    text-shadow: none;
    color: #fff;
    background-color: #3D4939;
  }

  html,
  menu {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after,
  html {
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-poppins), sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    background-image: url('/assets/images/bg-image.jpg');
    color: #3D4939;
  }

  img {
    height: auto;
    max-width: 100%;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  button {
    color: inherit;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-poppins), sans-serif;
  }

  a,
  button {
    touch-action: manipulation;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    pointer-events: none;
  }

  iframe,
  video {
    height: 100%;
    width: 100%
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    line-height: 1.5;
    color: inherit;
  }

  h1,
  h2 {
    font-family: var(--font-poppins), sans-serif;
    color: inherit;
  }

  h3,
  h4 {
    font-family: var(--font-poppins), sans-serif;
    color: inherit;
  }

  .swiper-wrapper {
    padding-bottom: 40px;
  }

  .swiper-pagination-bullet-active {
    background-color: #20C7CA;
  }

`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
