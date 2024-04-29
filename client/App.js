import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UserProfile from './src/component/UserProfile/UserProfile';
import EditProfile from './src/component/editprofile/EditProfile';
// import NAVSTART from './screens/Nav'
function App() {
  // const Stack = createStackNavigator();
  return (
<SafeAreaView style={styles.container}>
{/* <NAVSTART/> */}
{/* <UserProfile/> */}
<EditProfile/>
</SafeAreaView>
  );                                      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
export default App;
