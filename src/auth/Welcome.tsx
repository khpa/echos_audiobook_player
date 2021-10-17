// external dependencies
import * as React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

// internal dependencies
import {CompAuthStackNavProps} from '../navigation/types/props';

export function Welcome({navigation}: CompAuthStackNavProps<'Welcome'>) {
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
