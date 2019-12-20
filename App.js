import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  state [outText, setText] = useState("Changed text");
    return (
    <View style={{padding: 100}}>
      <View>
        <Text>Open up App.js to start working on yours app!</Text>
        <TextInput placeholder="hiii" style={{borderColor:'BLACK', borderWidth:1}}/>
        <Button title="Click me" />
      </View>
    </View>
  );
}

