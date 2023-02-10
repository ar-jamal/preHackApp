import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-Stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/Config/Screens/Home';
import Signin from './src/Config/Screens/signin';
import Signup from './src/Config/Screens/signup';

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const tabBarOptions = {
  indicatorStyle: { backgroundColor: 'blue' },
  backgroundColor: 'green',
};

export default function App() {
  return (
    <SafeAreaView style={styles.mainView}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flex: 1,
  },
});