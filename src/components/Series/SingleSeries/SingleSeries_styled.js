import styled from 'styled-components';

export const Title = styled.p`
  margin:0;
  padding:0;
  color:#ffff;
  font-size:2rem;
  font-weight: 300;
`;

export const Acapit = styled.p`
  color:#fff;
  text-decoration: ${(link) => 'none'};
`

export const Frame = styled.span`
  border:1px solid #ff6666;
  padding:5px;
  border-radius: 50%;
  margin-left:10px;
`
export const HrLine = styled.hr`
  border-width: 0.5px;
  width:20%;
  opacity:0.2;
`

export const ReturnBtn = styled.button`
  background: transparent;
  border:none;
  width:60px;
  height: 60px;
`

export const Img = styled.img`
  width:${(https) => '50px'};
  height:${(https) => '40px'};
  margin-top:${(https) => '10px'};
  height: 100%;
`