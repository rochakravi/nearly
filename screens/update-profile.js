import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../ui-kit/theme';
import {AppRegistry} from 'react-native';
import styled, {css} from '@emotion/native';
import OutlinedInput from '../ui-kit/outlineInput';
import Title from '../ui-kit/title';
import Icon from 'react-native-vector-icons/FontAwesome';

const UpdateProfile = () => {
  const [userName, setUserName] = useState('Ravi');
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        paddingLeft: 30,
        paddingRight: 30,
      }}>
      <Title
        style={{
          colors: theme.colors.gray1,
          fontSize: 40,
          fontWeight: 'bold',
        }}>
        Update Profile
      </Title>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'skyblue',
            width: 78,
            height: 78,
            borderRadius: 10,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Icon name="user" size={78} color={theme.colors.white} />
        </View>
        <Icon name="calendar" size={18} color={theme.colors.black} />
      </View>
      <OutlinedInput
        label={'First Name'}
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
      <OutlinedInput
        label={'Last Name'}
        value={''}
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
      <OutlinedInput
        label={'Date of Birth'}
        value={''}
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
        icon="calendar"
      />
      {/* <Icon name="calendar" size={18} color={theme.colors.black} /> */}
    </View>
  );
};
export default UpdateProfile;
const styles = StyleSheet.create({});
