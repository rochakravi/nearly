import React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({label}) => {
  const [text, setText] = React.useState('');
  return <TextInput label={label} mode="outlined" placeholder="normal" />;
};

export default Input;
