import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // :root {
    //     --color-main-bg-dark: #271A58;
    //     --color-main-bg-light: #FAFAFA;
    //     --color-bg-light-purple: #F9EBFF;
    //     --color-bg-palette-purple-90: #580EA2;
    //     --color-bg-palette-purple-110: #3F007D;
    //     --color-bg-palette-purple-100: #271A58;
    //     --color-bg-palette-grey-10: #F4F5F6;
    //     --color-bg-palette-grey-20: #D9D9D9;
    //     --monochrome-white-20: #FFF;
    //     --monochrome-black-20: #000;
    //     --color-button-bg: #140D40;
    //     --color-button-bg-hover: #2D1F79;
    //     --color-button-bg-active: #3B29A1;
    //     --color-text-light-grey: #F4F4FF;
    //     --color-text-light-green: #C7E957;
    //     --color-text-light-green-hover: #DAF289;
    //     --color-text-light-green-active: #EBFFAB;
    // }

    // @font-face {
    // font-family:' StratosSkyeng';
    // src: local('StratosSkyeng'), url('../../public/fonts/StratosSkyeng.woff2') format("woff2"),
    //      url('../../public/fonts/StratosSkyeng.woff') format("woff");
    // font-style: normal;
    // }
    

    * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
  
  div {
    font-family: 'Roboto', sans-serif;
  }
`