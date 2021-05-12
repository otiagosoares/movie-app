import styled from 'styled-components';

export const ContainerMovies = styled.div`
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;

`;

export const Card = styled.article`

  /* box-shadow: 0 0 10px rgba(0, 0, 0, .1); */
  transition: transform ease-in-out .5s;
  /* background-color: #fff; */
  position: relative;
  filter: blur(1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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
      transform: scale(1.02);
      cursor: pointer;
      filter: blur(0);
  }

  &:hover .card-content{
    bottom: 0 !important;
    left:0;
    width: 101%;
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
      height: 141px;
      position: absolute;
      bottom: -141px;
      background: #fff;
      width: 100%;
      transition: all .4s;
      left: 0;
  }

  .card-thumb img{
      max-width: 100%;
  }
`;