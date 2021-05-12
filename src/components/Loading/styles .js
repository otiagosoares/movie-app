import styled  from 'styled-components';

export const WrapperLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  opacity: .7;
  background-color: #f1f2f3;
  transition: 5s;
  z-index: 999;

  img{
    width: 10%;
  }
`;