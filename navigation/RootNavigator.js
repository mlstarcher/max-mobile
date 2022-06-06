import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, Text } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../config/firebase';
import { useAuth } from '../contexts/AuthenticatedUserProvider';
import AuthStack from '../screens/AuthStack';
import HomeStack from './HomeStack';

export default function RootNavigator() {
  const { user, setUser, loading } = useAuth().value;

  if (loading) {
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
