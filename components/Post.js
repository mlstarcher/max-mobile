import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Post({ post }) {
  return (
    <View>
      <Text style={styles.text}>Post</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E1DD',
    paddingTop: 80,
    paddingHorizontal: 12
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
})