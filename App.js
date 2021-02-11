import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login';
import LoginScreen from './screens/LoginScreen';
import Otp from './screens/otp';
import UpdateProfile from './screens/update-profile';
import SelectRange from './screens/select-range';
import SelectGroup from './screens/select-group';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen yes</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="SelectRange" component={SelectRange} />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default App;
