import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Main () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>Changes you make will automatically reload.</Text>
      <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgray'
  },
  text: {
    color: 'white'
  }
})
