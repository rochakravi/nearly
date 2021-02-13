import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';
import LoginScreen from './screens/LoginScreen';
import Otp from './screens/otp';
import UpdateProfile from './screens/update-profile';
import SelectRange from './screens/select-range';
import SelectGroup from './screens/select-group';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{headerTitle: ''}}
        />
        <Stack.Screen name="SelectRange" component={SelectRange} />
      </Stack.Navigator>
    </NavigationContainer>
  );
        }

export default App;
