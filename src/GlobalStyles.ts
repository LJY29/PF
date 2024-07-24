import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Staatliches&family=Archivo+Black&family=Noto+Serif+KR:wght@600&display=swap');

    *{
      padding: 0;
      margin: 0;
      font-family: 'Nanum Gothic', sans-serif;
      color: #131313;
      letter-spacing: -0.3px;
    }
    *:focus{
      outline: 0px transparent;
    }

    a, button {
      color: inherit; 
      text-decoration: inherit;
      cursor: pointer;
    }

    li {
      list-style: none;
    }

    h1, h2, h3, h4, h5, h6{
      font-weight: normal;
    }

    div.hidden {
      position: absolute; 
      left: -9999px;
    }
    a.hidden {
      position: fixed; 
      left: 0; 
      width: 200px; 
      height: 0; 
      line-height: 30px; 
      text-align: center; 
      color: #ffffff; 
      background: rgba(0, 0, 0, 0.5); 
      overflow: hidden; 
      transition: height 0.3s;

      &:focus { height: 30px; }
      &.start { top: 0; }
      &.end { bottom: 0; }
    }
  `}
`;
export default GlobalStyles;