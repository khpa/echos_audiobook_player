import * as React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {AuthNavigationProps} from '../navigation/Navigation';

export function Welcome({navigation}: AuthNavigationProps<'Welcome'>) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
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
