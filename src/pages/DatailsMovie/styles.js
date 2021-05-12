import styled from 'styled-components';

export const ContainerDetailMovie = styled.div`
    display:grid;
    height: 100%;
    grid-template-columns: 2fr 1fr 1fr;

    @media(max-width: 1400px){
    grid-template-columns: 2fr 1fr;

    }
    @media(max-width: 650px){
      grid-template-columns: 1fr;  
      .col-1{
        order: 2;

      }
      .col-2{
        order: 1;
      }
    }

    h2{
      position: relative;
    }

    .col-1{
      padding-right: 15px;
    }

    .badge{
      background-color: var(--color-theme);
      color: #fff;
      font-weight: 500;
      padding: 0 10px;
      float:right;
      position:absolute;
      right: 0;
      text-transform: uppercase;
    }
    .label-details{
      color: var(--color-theme);
      font-weight: 400;
      display: flex;
      align-items: center;
      svg{
        margin-right: .5em;
        font-size: 1.5em;
      }
    }

`;