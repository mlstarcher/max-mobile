import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { auth } from '../config/firebase';
import HomeScreen from '../screens/HomeScreen';
import CreatePost from '../screens/CreatePost';
import { IconButton } from '../components';
import { useEffect } from 'react/cjs/react.production.min';
import { useAuth } from '../contexts/AuthenticatedUserProvider';

const Stack = createStackNavigator();

export default function HomeStack({  }) {
  const { logOut } = useAuth().value;
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: 'M@X',
        headerTitleAlign: 'left',
        headerRight: (props) => (
          <IconButton
            {...props}
            name='logout'
            size={24}
            color='#fff'
            onPress={handleLogOut}
          />
        ),
        headerMode: 'float',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#CC7178',
         },
         headerRightContainerStyle: {
           paddingRight: 12
         }
      }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='CreatePost' component={CreatePost} />
    </Stack.Navigator>
  );
}
