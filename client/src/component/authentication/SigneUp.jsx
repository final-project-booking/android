import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, View, Button,Text } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {signUpAsync} from '../../SliceAction/authentication/signUpSlice'
const SignUp = () => {
  const [view, setView] = useState('firstView');

  const dispatch=useDispatch()

  // const user=useSelector(state=>state.)

  

  const switchView = (v) => {
    setView(v);
  };

  if (view === 'firstView') {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='firstName' />
          <TextInput style={styles.input} placeholder='lastName' />
          <TextInput style={styles.input} placeholder='email' />
          <TextInput style={styles.input} placeholder='password' />
          <Button style={styles.nextButton} onPress={() => switchView('nextView')} title='Next' />
        </View>
      </SafeAreaView>
    );
  } else if (view === 'nextView') {
    return (<>
      <Text style={styles.previousBtn} onPress={() => switchView('firstView')}>Previous</Text>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='phoneNumber' />
          <TextInput style={styles.input} placeholder='location' />
          <TextInput style={styles.input} placeholder='imageUrl' />
          <Button style={styles.nextButton} onPress={() => console.log('Sign up')} title='Sign up' />
        </View>
      </SafeAreaView>
    </>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 20,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previousBtn:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  }
});

export default SignUp;
