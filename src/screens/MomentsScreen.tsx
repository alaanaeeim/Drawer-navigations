import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MomentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Moments Screen</Text>
    </View>
  );
};

export default MomentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
