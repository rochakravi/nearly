import React from 'react'
import { TextInput } from 'react-native-paper';

import { AppRegistry } from 'react-native'

const Input =()=>{
    const [text, setText] = React.useState('');
    return (
        <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      /> 
    )
  
}

export default Input