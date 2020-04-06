import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText } from './Error_text_styled';

function Error_text({children}){

  return(
  <ErrorText>{children}</ErrorText>
  )
}

Error_text.propTypes = {
  children: PropTypes.any,
};

export default Error_text;