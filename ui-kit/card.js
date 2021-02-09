import React, {Fragment} from 'react';
import {Card} from 'react-native-paper';
// import styled from 'styled-components';

// const cardView = styled.card`
//   top: 372px;
//   left: 0px;
//   width: 375px;
//   height: 440px;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   box-shadow: 0px -12px 16px #455b631a;
//   border-radius: 16px 16px 0px 0px;
//   opacity: 1;
// `;

const Cardd = ({children}) => {
  return <Card>{children}</Card>;
};
export default Cardd;
