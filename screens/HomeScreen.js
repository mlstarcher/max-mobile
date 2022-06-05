import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { IconButton } from '../components';
import { auth, db } from '../config/firebase'
import { useAuth } from '../contexts/AuthenticatedUserProvider';
// import { AuthenticatedUserContext } from '../contexts/AuthenticatedUserProvider';
// import Post from '../components/Post';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const { user, loading } = useAuth().value;

  useEffect(() => {
    let allPosts = [1, 2];
    // db.collection("posts").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //allPosts.push(doc.data());
    // });
    // });
    //setPosts(allPosts);
  })

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.rowStart}>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={styles.row}>
        {posts.map(post => {
          <Post />
        })}
      </View>
      <View style={styles.rowEnd}>
        <IconButton
          name='pencil-circle-outline'
          size={48}
          color='#5E747F'
          onPress={() => navigation.navigate('CreatePost')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E1DD',
    paddingTop: 20,
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 12
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 12
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
