import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';

export default function App() {
  console.log('App executed');
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}