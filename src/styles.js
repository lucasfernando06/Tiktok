import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'sofiapro' ;
    src: url('/sofiapro.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }
  html, body, #root {  
    width: 100%;
    height: 100%;  
    font-family: sofiapro;   
  }
  body {
    overflow-x: hidden;
  }
  :root {
    --black: #000;
    --white: #fff;
    --pink: #fe2c55;
  }
`;
