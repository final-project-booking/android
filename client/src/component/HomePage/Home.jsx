
import React from 'react'
import { View, Text, StyleSheet, ViewBase,Image ,TextInput} from 'react-native';

export default function Home() {



  return (
    <View >
    <View>
      <Image source={require("../../Photo/bestpho.jpg")} />
      <TextInput/>
    </View>
   
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   color: '007EF2',
  },
  image: {
    width: '100%', // Adjust width to fill the container
    aspectRatio: 16/9, // Set aspect ratio to maintain image proportions
    resizeMode: 'cover', 
    height: '20%', // Adjust height to fill the container
  },
});