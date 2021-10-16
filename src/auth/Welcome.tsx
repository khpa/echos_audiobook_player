// external dependencies
import * as React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

// internal dependencies
import {AuthNavigationProps} from '../navigation/Navigation';

export function Welcome({navigation}: AuthNavigationProps<'Welcome'>) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
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
