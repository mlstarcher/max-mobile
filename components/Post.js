import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Post({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>WTF Mate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 12
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black'
  }
})