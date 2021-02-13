import React from 'react';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components';

const InputView = styled.TextInput`
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #979797;
  border-radius: 8px;
  padding-left: 15px;
`;

const Input = ({label}) => {
  const [text, setText] = React.useState('');
  return <InputView label="pjn" mode="outlined" />;
};

export default Input;
