import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import OwnerProfile from './src/component/OwnerProfile/OwnerProfile';
import Map from './src/component/Map'  
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}
// import {SafeAreaView,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import AppFace from './src/component/appFace/appFace.js';
// import Home from './src/component/HomePage/Home.js'
// import 'react-native-gesture-handler';
// function App(){




//   return (
//     // <SafeAreaView style={styles.container}>
//     // <NavigationContainer>
//     // <View>
//     //   <Text>hello</Text>
//     // </View>
//       <Home />
   
//       // </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;