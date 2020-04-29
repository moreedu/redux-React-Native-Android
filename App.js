import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.Container}>
      <Text style={styles.welcome}>Hello World!</Text>
    </View>
  );
}
