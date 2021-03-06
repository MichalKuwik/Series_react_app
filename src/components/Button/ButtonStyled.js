import styled,{keyframes} from 'styled-components';

const btnAppear = keyframes`
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1);
  }
`;

export const ButtonStyled = styled.button`
  background:transparent;
  width:60px;
  height:60px;
  border:2px solid #ff6666;
  padding:7px;
  border-radius:50%;
  margin-top:1rem;
  transition: all 0.5s ease-in-out;
  animation: ${btnAppear} 1s 1.5s both;
  &:hover{
    background: #222021;
  }
`