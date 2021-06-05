import React from 'react';
import { 
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet, 
  ImageBackground, 
  TextInput
} from 'react-native';
import { Input } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';


export default function Header({onOpen}){
  return (
      <ImageBackground source={require('../assets/templateHeader.png')} style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent 
          backgroundColor="transparent"
        />

        <TouchableOpacity 
          style={[styles.cart, {marginLeft: 20}]}
        >
          <Icon name='angle-left' color='white' size={21}/>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={onOpen} 
          style={styles.cart}
        >
          <Icon name='shopping-basket' color='white' size={18}/>
        </TouchableOpacity>
        <TextInput
          placeholder="  Buscar produtos ou categorias"
          style={styles.input}
        />
      </ImageBackground>
    //   color-wand-outline
  );
  
}

const styles = StyleSheet.create({
    container: {
      height: 77,
      backgroundColor: '#423C3C',
    },
    cart:{
      position: 'absolute',
      marginLeft: 355,
      marginTop:26,
      backgroundColor: '#555252', 
      height: 35,
      width: 35,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    input:{
      backgroundColor: '#FFFF',
      marginTop: 25,
      borderRadius: 25,
      width: 280,
      marginLeft: '16%',
      fontSize: 18,
      height: 42
    }
});

