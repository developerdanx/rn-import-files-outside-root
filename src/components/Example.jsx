import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Example = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello from Root: /src</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 200,
    justifyContent: 'center',
    width: 200,
  },
  title: {
    fontSize: 18,
  },
});
