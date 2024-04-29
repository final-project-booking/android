import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import OwnerProfile from './src/component/OwnerProfile/OwnerProfile';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OwnerProfile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;