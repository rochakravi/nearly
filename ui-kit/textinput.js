import React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({label}) => {
  const [text, setText] = React.useState('');
  return (
    <TextInput
      label={label}
      mode="outlined"
      underlineColor=" #3C3C3C"
      style={{height: 40}}
    />
  );
};

export default Input;
