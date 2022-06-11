import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '../components';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';
// import Firebase from '../config/firebase1';
import { auth, db } from '../config/firebase'
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { AuthenticatedUserContext } from '../contexts/AuthenticatedUserProvider';

export default function CreatePost() {
  const [title, onChangeTitle] = useState("");
  const [text, onChangeText] = useState("");
  // const { user } = useContext(AuthenticatedUserContext);

  let submit = () => {
    let payload = {
      // user: user.uid,
      title: title,
      textContent: text,
      //url: null
    }
    const myCollRef = collection(db, "posts");
    const myDocRef = doc(myCollRef);
    //await setDoc(myDocRef, payload);
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View>
        <View style={styles.textContainer}>
          <TextInput
            multiline={true}
            numberOfLines={1}
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Title"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Write your post here"
          />
        </View>
      </View>
      <Button
        onPress={submit}
        backgroundColor='#006FB9'
        title='Submit'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginTop: 12
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E1DD',
    paddingTop: 20,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#CC7178'
  },
  input: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  },
  textContainer: {
    fontSize: 16,
    fontWeight: 'normal',
    borderWidth: 1,
    borderColor: '#717171',
    color: '#fff',
    padding: 5,
    marginBottom: 12
  },
  textAreaContainer: {
    borderColor: '#717171',
    height: 250,
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  }
});
