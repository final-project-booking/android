

import React from 'react';
import {SafeAreaView,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppFace from './src/component/appFace/appFace.jsx';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ProfileScreen from './src/component/HomePage/Home.jsx'
// const Stack = createNativeStackNavigator();

function App(){




  return (
    // <SafeAreaView style={styles.container}>
    // <NavigationContainer>
      <AppFace/>
   
      // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex:1
  }
});

export default App;
