import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { IconButton } from '../components';
import { auth, db } from '../config/firebase'
import { AuthenticatedUserContext } from '../contexts/AuthenticatedUserProvider';
// import Post from '../components/Post';

export default function HomeScreen({ navigation }) {
  console.log('HomeScreen');
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    let allPosts = [];
    // db.collection("posts").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //allPosts.push(doc.data());
      // });
    // });
    //setPosts(allPosts);
  })

  // const handleSignOut = async () => {
  //   try {
  //     await auth.signOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12
      }}>
        <IconButton
          name='pluscircleo'
          size={48}
          color='#5E747F'
          onPress={() => navigation.navigate('CreatePost')}
        />
      </View>
      {posts.map(post => {
        <Post/>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E1DD',
    paddingTop: 20,
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
