import styled,{ keyframes } from 'styled-components';

const fadeAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ErrorText = styled.p`
  color:red;
  font-size:0.85rem;
  animation: ${fadeAnim} 1s 0.9s ease-in-out both;
`;