import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root{
    --color-theme: #9000ff;
  }
  *{
    box-sizing: border-box;
  }
  img{
    width: 100%;
  }
  html, body {
    font-size: 1em;
    margin: 0;
    padding: 0;
    background: #f1f2f3;
    font-weight: 100;
    font-family: 'Poppins', sans-serif;
    color: #1d1d1d;
  }
  h1, h2, h3,
  input, textarea, button, p{
    font-family: 'Poppins', sans-serif;
  }
  a, button{
    cursor: pointer;
    text-decoration: none;
  }
  a:active{
    color: var(--color-theme);
  }
  h1{
    font-weight: 500;
    color: var(--color-theme);
  }
  
  h2{
    font-weight: 400;
    color: var(--color-theme);
  }

  .Movies-app{
    display:grid;
    grid-template-columns: 5fr;
    dis
  }

  .page-content{
    padding: 0 30px 50px 30px;
    padding-left: 230px;
  }

  @media(max-width: 600px){
    .page-content{
      padding-left: 30px;
    }  
  }

`;
 
export default GlobalStyle;