// external dependencies
import React, {useEffect} from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Text, View, StyleSheet, Button} from 'react-native';

// internal dependencies
import useStore from '../../store/useStore';
import {BottomTabsNavProp} from '../../navigation/types/props';

// TODO: Look into fluid transition between Home and AudioRoutes (https://reactnavigation.org/docs/community-libraries-and-navigators)

const Home = ({navigation}: BottomTabsNavProp<'Home'>) => {
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    useStore.setState({
      tabBarHeight: tabBarHeight,
    });
  }, [tabBarHeight]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Audio"
        onPress={() => navigation.navigate('AudioPlayer')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
