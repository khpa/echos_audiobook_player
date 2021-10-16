import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthNavigationProps} from '../navigation/Navigation';

export function Login({navigation}: AuthNavigationProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Main')} />
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
