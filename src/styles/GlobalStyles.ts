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

  button {
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;

    &[disabled] {
      opacity: 0.6;
    }
  }

  label {
    color: #808080;
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
    min-height: 16px;
    font-weight: 500;

    > span {
      color: #FF3552;
    }
  }

  input {
    display: block;
    width: 100%;
    border: 1px solid #EBEBEB;
    background-color: #FFF;
    padding: 8px 10px;
    color: #3D4939;
    border-radius: 5px;
    font-size: inherit;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid #EBEBEB;
    }
  }

  fieldset {
    display: block;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 0 0 15px;
    padding: 0;
  }

  textarea {
    background: #FFF;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
    display: block;
    padding: 15px;
    font-size: 14px;
    width: 100%;
    overflow: auto;
    resize: none;
    border-radius: 5px;
    font-family: var(--font-poppins), sans-serif;
    color: inherit;

    &:focus,
    &:active {
      border: 1px solid #EBEBEB;
      outline: 0;
    }

    &[readonly],
    &[disabled] {
      background-color: #f3f3f3;
    }
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  input[type='number']:hover,
  input[type='number']:focus {
    -moz-appearance: number-input;
  }

  .select {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 5px;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #EBEBEB;
    background-color: #FFF;
    cursor: pointer;
  }

  select {
    background-color: transparent;
    color: #3D4939;
    width: 100%;
    padding: 10px 45px 10px 15px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    appearance: none;
    outline: 0;
    background-image: none;
    line-height: 21px;
    border: none;
    cursor: pointer;
  }

  .swiper-wrapper {
    padding-bottom: 40px;
  }

  .swiper-pagination-bullet-active {
    background-color: #20C7CA;
  }

  .swiper-button-prev,
  .swiper-button-next {
    font-size: 30px;
    color: #fff;
    background-color: #DF928E;
    margin-top: -40px;
    height: 27px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #fff;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 16px;
    font-weight: 700;
  }

  .my-20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .grecaptcha-badge {
    display: none !important;
    opacity: 0;
    visibility: hidden;
  }

`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
