import {createGlobalStyle} from 'styled-components';

import colors from './constants/colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

  html,
  body {
    width: 100vw;
    background: ${colors.white};
    background-size: cover;
    display: flex;
    padding: 0;
    margin: 0;
  }


  *::-webkit-scrollbar {
    display: none !important;
  }

  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${colors.black};
    font-weight: 400;
    font-size: 14px;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  figure {
    margin: 0;
  }
`;
