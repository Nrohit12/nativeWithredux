import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/authentication'

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions= {{
      headerShown:false
    }}>
      <Stack.Screen name="Login" component={Login} />      
    </Stack.Navigator>
  );
}

export default AuthStack;