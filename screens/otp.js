import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import theme from '../ui-kit/theme';
import NButton from '../ui-kit/button';
import {Button} from 'react-native-paper';
import Title from '../ui-kit/title';
import OutlinedInput from '../ui-kit/outlineInput';

const Otp = ({route, navigation}) => {
  const [userName, setUserName] = useState('');
  const {itemId, otherParam} = route.params;
  const handler = () => {
    navigation.navigate('UpdateProfile');
  };
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        paddingLeft: 30,
        paddingRight: 30,
      }}>
      <Title
        style={{
          color: theme.colors.secondary,

          fontSize: 40,
          fontWeight: 'bold',
        }}>
        60 Seconds
      </Title>
      <Text
        style={{marginTop: 20, marginBottom: 30, color: theme.colors.gray2}}>
        Please enter the OTP sent
        {'\n'}
        on your mobile phone number
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: theme.colors.gray1,
            fontWeight: 'bold',
          }}>
          9910568242
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: 'bold',
          }}>
          EDIT
        </Text>
      </View>
      <Title
        style={{
          color: theme.colors.gray1,
          fontSize: 12,
          marginTop: 30,
          marginBottom: 10,
        }}>
        Verification Code
      </Title>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <OutlinedInput
          label={''}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
          theme={{
            colors: {text: '#3C3C3C', primary: '#3C3C3C', background: 'white'},
          }}
        />

        <OutlinedInput
          label={''}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
          theme={{
            colors: {text: '#3C3C3C', primary: '#3C3C3C', background: 'white'},
          }}
        />
        <OutlinedInput
          label={''}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
          theme={{
            colors: {text: '#3C3C3C', primary: '#3C3C3C', background: 'white'},
          }}
        />
        <OutlinedInput
          label={''}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
          theme={{
            colors: {text: '#3C3C3C', primary: '#3C3C3C', background: 'white'},
          }}
        />
        <OutlinedInput
          label={''}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
          theme={{
            colors: {text: '#3C3C3C', primary: '#3C3C3C', background: 'white'},
          }}
        />
        <OutlinedInput
          label={''}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
          }}
          theme={{
            colors: {text: '#3C3C3C', primary: '#3C3C3C', background: 'white'},
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 32,
          marginBottom: 52,
        }}>
        <Text
          style={{
            color: theme.colors.gray3,
            fontSize: 10,
          }}>
          Didn’t receive the code?
        </Text>
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: 'bold',
          }}>
          Resend OTP
        </Text>
      </View>
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}

      <NButton
        title="Verify & Proceed"
        color={theme.colors.primary}
        labelTextColor={theme.colors.white}
        onPress={handler}
      />
    </View>
  );
};
export default Otp;
const styles = StyleSheet.create({});
