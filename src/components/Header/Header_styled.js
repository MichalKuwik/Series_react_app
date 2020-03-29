import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SvgWrapper = styled.div`
  width:50vh;
  height: 40vh;

  @media(max-width:450px){
    width:40vh;
    height: 35vh;
  }
`;

export const Image = styled.img`
  width:100%;
  height: 100%;
`;