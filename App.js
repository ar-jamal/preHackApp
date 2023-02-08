import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from './src/Utils/colors';

  function App() {

  return (
    <SafeAreaView style= {styles.main}>
      <StatusBar
        backgroundColor= "white"
      />
      <View style= {styles.headingView}>
      <Text style= {styles.heading}>AWAL</Text>
      </View>
      <View style={styles.header}>
        <ImageBackground source={require('./src/Utils/Images/vector.png')}/>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.body}>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.themeColorLight
  },
  heading: {
    width: '100%',
    height: '4%',
  },
  header: {
    width: '100%',
    flex: 1.5,
    backgroundColor: "red" /* colors.themeColorDark */,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  body: {
    width: '100%',
    flex: 4,
  }

});

export default App;
