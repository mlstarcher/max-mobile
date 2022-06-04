import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from '../components';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';
// import Firebase from '../config/firebase1';
import { auth, db } from '../config/firebase'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

export default function CreatePost() {
  const [text, onChangeText] = useState("");
  const { user } = useContext(AuthenticatedUserContext);

  let submit = () => {
    let payload = {
      user: user.uid,
      textContent: text,
      //url: null
    }
    db.collection("posts").add(payload)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
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
    //marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#CC7178'
  },
  input: {
    height: 250,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  },
  textAreaContainer: {
    borderColor: '#717171',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  }
});
