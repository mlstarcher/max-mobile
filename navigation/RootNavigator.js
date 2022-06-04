import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, Text } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../config/firebase';
import { AuthenticatedUserContext } from '../contexts/AuthenticatedUserProvider';
import AuthStack from '../screens/AuthStack';
import HomeStack from './HomeStack';

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  console.log('RootNavigator')
  // useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
  //   const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
  //     try {
  //       await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });

  //   // unsubscribe auth listener on unmount
  //   return unsubscribeAuth;
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setIsLoading(false)
    })
    console.log('user:', user)
    return unsubscribe;
  }, [])


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
