import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './components/mainpage';


export default function App() {
  return (
    
    <View styles={styles.container}>
      <MainPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  }
});
