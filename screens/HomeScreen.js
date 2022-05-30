import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Welcome to Mondays at Ten! {"\n"} {user.email}</Text>
        <IconButton
          name='logout'
          size={24}
          color='#717171'
          onPress={handleSignOut}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end'
        }}>
      {/* <Text style={styles.text}>Your UID is: {user.uid} </Text> */}
      <IconButton
          name='pluscircleo'
          size={48}
          color='#717171'
          // onPress={() => '';}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {

    },
  container: {
    flex: 1,
    backgroundColor: '#F3E1DD',
    paddingTop: 80,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333333'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});
