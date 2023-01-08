import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {Example} from '../src/components';
// import {Example} from '@components';

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello from /native</Text>
      <Example />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});

export default App;
