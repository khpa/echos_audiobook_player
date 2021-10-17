// external dependencies
import * as React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export const SearchResultItem = ({item}: {item: any}) => {
  return (
    <View key={item.id} style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => console.log(item.volumeInfo.title)}>
        <Text>{item.volumeInfo.title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
