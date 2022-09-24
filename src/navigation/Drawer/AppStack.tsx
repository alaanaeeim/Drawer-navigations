/* eslint-disable react-native/no-inline-styles */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../../components/CustomDrawer';
import HomeScreen from '../../screens/HomeScreen';
import MessagesScreen from '../../screens/MessagesScreen';
import MomentsScreen from '../../screens/MomentsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        drawerStatusBarAnimation: 'slide',
        drawerItemStyle: {borderRadius: 8},
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -20, fontSize: 16},
        headerLeft: () => (
          <Ionicons
            name="list-outline"
            size={25}
            color="blue"
            style={{marginHorizontal: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
