import React from 'react'
import { View, Text, StyleSheet, ViewBase,Image,Button ,ImageBackground} from 'react-native';

const appFace = ({ navigation }) => {

  const handleButtonPress = () => {
 
    navigation.navigate('../HomePage/Home.jsx');
  };

    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../../Photo/face.png')}
        style={styles.image}
      >
      
        <View style={styles.content}>
          <Button title='Get Start' onPress={handleButtonPress}  />
          <Text style={styles.text}>If you have an Account? Login</Text>
          <Text style={styles.text}>If you don't have an Account? Sign Up</Text>
        </View>
      </ImageBackground>
    </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginBottom: 20, 
    top:200,
    lineHeight: 24,
  },
  text: {
    color: 'white',
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default appFace
