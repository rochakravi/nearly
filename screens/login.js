import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import theme from '../ui-kit/theme';
import {Title} from 'react-native-paper';
import Input from '../ui-kit/textinput';
import NButton from '../ui-kit/button';
import {TextInput, Card} from 'react-native-paper';
import OutlinedInput from '../ui-kit/outlineInput';

const Login = ({navigation, props}) => {
  let WINDOW_HEIGHT = Dimensions.get('window').width;
  const [userName, setUserName] = useState('');

  const handler = () => {
    navigation.navigate('Otp', {
      itemId: {userName},
      otherParam: 'anything you want here',
    });
  };
  return (
    <View style={{display: 'flex', justifyContent: 'flex-end'}}>
      <Card
        style={{
          height: 440,
          padding: 30,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Title style={{marginBottom: 30}}>Login/Sign Up</Title>
        <OutlinedInput
          label={'Enter Mobile Number/Email'}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          style={{
            height: 40,
            borderRadius: 8,
            marginBottom: 30,
          }}
          theme={{
            colors: {
              text: '#3C3C3C',
              primary: '#3C3C3C',
              background: '#FFFFFF',
              borderRadius: 8,
            },
          }}
        />
        <NButton
          mode="contained"
          title="continue"
          color={theme.colors.primary}
          labelTextColor={theme.colors.white}
          onPress={() => handler()}
        />
        <Image
          source={require('../asset/devider.png')}
          style={{marginTop: 30, width: '100%'}}
        />
        <View style={styles.using}>
          <NButton
            icon="facebook"
            mode="contained"
            title="facebook"
            color={theme.colors.facebook}
            labelTextColor={theme.colors.white}
            style={styles.half}
          />
          <NButton
            icon="google"
            mode="contained"
            title="google"
            color={theme.colors.white}
            labelTextColor={theme.colors.black}
          />
        </View>
        <NButton
          icon="apple"
          mode="contained"
          title="Apple ID"
          color={theme.colors.black}
          labelTextColor={theme.colors.white}
        />
        <View
          style={{
            backgroundColor: 'black',
            height: 1,
            marginTop: 30,
            marginBottom: 20,
          }}></View>
        <Text style={{fontSize: 10, paddingLeft: 70}}>
          By signing up you agree to our{' '}
          <Text style={{color: theme.colors.primary}}>Terms of Usage</Text>
        </Text>
      </Card>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  login: {
    margin: 15,
  },
  using: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
});
