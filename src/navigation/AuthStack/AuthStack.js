import React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.title}>
      <Text>SignUp Screen</Text>
      <Button
        title="SignIn Screen"
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.title}>
      <Text>SignIn Screen</Text>
      <Button
        title="SignIn Screen"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </View>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  title: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
