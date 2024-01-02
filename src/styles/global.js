import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    overflow-x: hidden;
    display: grid;
    grid-template-rows: 10dvh 80dvh 10dvh;
    grid-template-areas:
    'header'
    'content'
    'footer';
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.CYAN_ORIENT};  
}

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`
