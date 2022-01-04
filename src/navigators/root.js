import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './appnavigator'
import AuthStack  from './authnavigator'
import { useSelector } from 'react-redux'
export default function App() {
  return (
    <NavigationContainer>
        <Main />
    </NavigationContainer>
  );
}

function Main(){
    const LoggedIn = useSelector(state => state.authentication)
    
    if(LoggedIn == 'LoggedOut') return <AuthStack />
    return <AppStack />
}