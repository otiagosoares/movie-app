import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  height: 100vh;   
  min-width: 200px;

  ul.nav-ul{
    height: 100vh;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li{
      list-style:none;
      width:100%;
      line-height: 4em;
      text-align: center;
      position:relative;
    }

    li a:before, li a.active:before{
      content: '';
      position: absolute;
      background-color: var(--color-theme);
      width: 3px;
      right: 0;
      height: 100%;
      opacity: 0;
      transition: ease-in-out .2s;
    }

    li a:hover:before{
      opacity: 1
    }

    li a.active:before{
      opacity: 1 !important;
    }

    a{
      text-decoration: none;
      font-size: 2em;
      font-size: 500;
      display: block;
      width: 100%;
      transition: .2s;
    }

  }
`;