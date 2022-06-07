import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Post({ currentPost }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{currentPost.title}</Text>
      <Text style={styles.text}>{currentPost.textContent}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 80,
    padding: 12,
    borderWidth: 1,
    borderColor: "#20232a",
    // borderRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'black'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  }
})