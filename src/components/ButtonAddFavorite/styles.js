import styled from 'styled-components';

export const BtnAddFavorite = styled.span`
  cursor: pointer;
  position: absolute;
  font-size: 1.6em;
  top: .5em;
  right: .5em;
  color: var(--color-theme);
  transition: all .1s;
  transform: scale(1.2);
  animation: pulse-purple 2s infinite;
  
  @keyframes pulse-purple {
    0% {
      transform: scale(0.95);
    }
    
    70% {
      transform: scale(1.3);
    }
    
    100% {
      transform: scale(0.95);
    }
  }
`;