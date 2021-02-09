import React from 'react';
import theme from './theme';
import styled from 'styled-components';
import {Text} from 'react-native';

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
`;

const Title = ({children}) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;
