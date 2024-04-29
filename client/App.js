import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NAVSTART from './screens/Nav'
function App() {
  const Stack = createStackNavigator();
  return (
<SafeAreaView style={styles.container}>
<NAVSTART/>
</SafeAreaView>
  );                                      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
export default App;
