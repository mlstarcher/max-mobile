import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const auth = Firebase.auth();

export default function HomeScreen({ navigation }) {
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
      {/* <View style={styles.header}>
        <Text style={styles.title}>M@X</Text>
        <IconButton
          name='logout'
          size={24}
          color='#5E747F'
          onPress={handleSignOut}
        />
      </View> */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 12
      }}>
        <IconButton
          name='pluscircleo'
          size={48}
          color='#5E747F'
          onPress={() => navigation.navigate('CreatePost')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#5E747F',
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingBottom: 12
  },
  container: {
    flex: 1,
    backgroundColor: '#F3E1DD',
    paddingTop: 80,
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
    color: '#CC7178'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
});
