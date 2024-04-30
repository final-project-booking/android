

import React from 'react';
import {SafeAreaView,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppFace from './src/component/appFace/appFace.js';
import Home from './src/component/HomePage/Home.js'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
function App(){




  return (
   
    <NavigationContainer>
  
      <Home />
   
      // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
