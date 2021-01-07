import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import PayScreen from './src/screens/Payment/PayScreen';

export default function App() {
  return (
    // <LoginScreen/>
    // <HomeScreen/>
    <PayScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
