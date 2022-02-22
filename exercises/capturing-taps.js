// Capturing User Taps

import React from 'react';
import {Button, View, Alert, Pressable, Text} from 'react-native';

export default CaptureTaps = () => {
  // Replace return null with your code.
  return (
    <View>
      <Button
        title='Botton 1'
        onPress={() => Alert.alert("hello!")}
      />
      <Pressable
        style={{
          padding: 10,
     
          alignSelf: "center",
        
          backgroundColor: "blue",
          }}
        onPress={() => Alert.alert("hello 2!")}>
        <Text style={{color: "white"}}>Botton 2</Text>
      </Pressable>
    </View>
  );
};