import styled from 'styled-components';

export const Card = styled.article`

  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  transition: transform ease-in-out .2s;
  background-color: #fff;
  position: relative;
  filter: blur(1);
  a{
    text-decoration: none;
  }
  .btn-favorite{
    position: absolute;
    top: 1em;
    right: 1em;
    color: var(--color-theme);
    transition: all .2s;
  }
  .btn-favorite:hover{
    transform: scale(1.2);
  }
 
  &:hover{
      transform: scale(1.05);
      cursor: pointer;
      filter: blur(0);
  }

  .card-content h2{
    font-size: 1.1em;
  }
  .card-content p{
    line-height: 38px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-content p span svg{
    margin-right: 10px;
    color: var(--color-theme)
  }
  .card-content p span{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-content{
      padding: 15px;
  }

  .card-thumb img{
      max-width: 100%;
  }
`;