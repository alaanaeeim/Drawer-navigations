/* eslint-disable react-native/no-inline-styles */
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: '#8200d6',
        }}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.image}
          />
          <Text style={styles.name}>Alaa Naeeim</Text>
          <View style={styles.containerFollowers}>
            <Text style={{color: '#fff'}}>250 Followers</Text>
            <FontAwesome5
              name="users"
              size={18}
              color="#fff"
              style={{marginHorizontal: 10}}
            />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 3,
  },
  containerFollowers: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
