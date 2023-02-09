import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './src/Config/Screens/signup';
import Home from './src/Config/Screens/home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CusHeader from './src/Config/Components/header';
import { View, StyleSheet, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Signin from './src/Config/Screens/signin';

export default function CusHeader() {
    return (
        <View style={styles.headerView}>
            <View style={styles.headerLeft}>
                <Image style={styles.logo} source={require('../Utils/Images/Logo.png')} />
                <Image style={styles.titleText} source={require('../Utils/Images/Plantify.png')} />
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <Icon />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: '70%',
    },
    logo: {
        height: '7%',
        margin: 20,
        resizeMode: 'contain'
    },
    titleText: {
        height: '7%',
    },
});