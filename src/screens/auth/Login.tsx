// external dependencies
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// internal dependencies
import {CompAuthStackNavProps} from '../../navigation/types/props';

export function Login({navigation}: CompAuthStackNavProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'BottomTabs',
            params: {screen: 'Home'},
          })
        }
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