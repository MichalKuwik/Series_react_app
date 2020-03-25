import React from 'react';
import { ErrorText } from './Error_text_styled';

function Error_text({children}){

  return(
  <ErrorText>{children}</ErrorText>
  )
}

export default Error_text;