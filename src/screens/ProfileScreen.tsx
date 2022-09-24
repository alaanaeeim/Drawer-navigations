import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
