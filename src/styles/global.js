import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLACK};

    outline: none;
  }
  
  a{
    cursor: pointer;
    text-decoration: none;
    transition: filter 0.2s;
  }

`;