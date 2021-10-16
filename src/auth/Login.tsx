// external dependencies
import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// internal dependencies
import {AuthNavigationProps} from '../navigation/Navigation';

export function Login({navigation}: AuthNavigationProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
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
