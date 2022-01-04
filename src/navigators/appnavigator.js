import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Cart} from '../components/home'

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions= {{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default AppStack;