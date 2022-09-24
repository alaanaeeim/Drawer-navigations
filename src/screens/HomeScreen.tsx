import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface IhomeProps {
  navigation?: any;
}

const HomeScreen: React.FC<IhomeProps> = ({navigation}: IhomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.titleBtn}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  titleBtn: {
    fontSize: 15,
    color: 'white',
  },
});
