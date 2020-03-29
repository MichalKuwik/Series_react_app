import React from 'react';
import { Tween} from 'react-gsap';
import allImg from '../../assets/img/move-logo.png'
import { HeaderStyled,SvgWrapper,Image } from './Header_styled';

const Header = () => (
    <HeaderStyled>
      <SvgWrapper>
        <Tween
          from={{ 
            y: '-40px', 
            opacity:0,
            
          }}
        >
          <Image src={allImg} alt=""/>
        </Tween>  
      </SvgWrapper>
    </HeaderStyled>
  );

  export default Header;