import React from 'react';
import {Text} from 'react-native';
import theme from './theme';

const Title = ({children, style}) => {
  return <Text style={style}>{children}</Text>;
};

export default Title;
