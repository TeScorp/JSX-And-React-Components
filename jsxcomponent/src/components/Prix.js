import React from 'react';
import './Prix.css'

const Prix = ({ prix }) => {
  return <p style={{fontWeight:'bold' , marginTop:'20px' , cursor:'pointer'}}>Prix: {prix}</p>;
};

export default Prix;
