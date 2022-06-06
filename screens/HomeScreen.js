import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { IconButton } from '../components';
import { auth, db } from '../config/firebase'
import { useAuth } from '../contexts/AuthenticatedUserProvider';
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import Post from '../components/Post';

export default function HomeScreen({ navigation }) {
  const { user, loading } = useAuth().value;
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "posts");

  const fetchPosts = async () => {
    const data = await getDocs(collection(db, 'posts'));
    data.docs.forEach(item => {
      console.log(item.id, " => ", item.data());
      setPosts([...posts, item.data()])
    })
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.rowStart}>
        <Text style={styles.title}>Welcome {user.displayName}!</Text>
      </View>
      <View >
        {posts.map((post, index) => {
          // return <Post props={post} key={index}/>
          return <Text>WTF Mate</Text>
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
