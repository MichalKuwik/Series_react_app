import styled,{keyframes} from 'styled-components';

const animItem = keyframes`
   0%
  {
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`

export const SingleSeries = styled.div`
      margin-top:2rem;
      padding:1rem;
      min-width:15%;
      border: 1px solid #ff6666;
      position: relative;
      z-index: 9999;
      animation: ${animItem} 0.5s ease-in both;

      &::after{
        position: absolute;
        content: '';
        border: 1px solid #ff6666;
        left:-5px;
        top:5%;
        width:100%;
        height: 100%;
        z-index:-99991;
      }
`;

export const SingleSeriesImg = styled.img`
  width:30px;
  height:30px;
  margin-right:1rem;
`;