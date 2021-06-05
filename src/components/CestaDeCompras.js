import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useCart } from '../context/productsContext';
import CardCart from './CardCart';


export default function CestaDeCompras({onClose, modalizeRef}){
    
    const {removeAll, totalValue} = useCart()

    return(
        <Modalize
            ref={modalizeRef}
            snapPoint={670}
            modalHeight={670}
            withHandle={false}
            modalStyle={{backgroundColor: 'transparent',
                            shadowOpacity:0.1, elevation:0,
                            }}
            scrollViewProps={{showsVerticalScrollIndicator: false}}
        >

            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                
                <View style={{marginTop: 30}}>
                    <Image
                        source={require('../assets/cesta.png')}
                        style={{height: 60, width: 300}}
                    />
                </View>
                <View style={{flex:1,
                            backgroundColor:'#ffff',  
                            borderRadius: 12,
                            width: '100%', 
                            height: 580,
                            justifyContent: 'flex-end',
                        }}
                >
                <Text style={{fontSize: 15, 
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: 9,
                            left: 15,
                            color: '#868080'}}>
                    SUBTOTAL
                </Text>
                <Text style={{fontSize: 33, 
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: 27,
                            left: 15}}>
                    R$ {totalValue}
                </Text>
                <View style={
                    {
                        height: 400,
                        backgroundColor: '#E3E3E3',
                        marginBottom: 15
                    }
                }>
                    <CardCart/>
                </View>
                <View style={{flexDirection: 'column', 
                            width:'100%',
                            alignItems: 'center'

                            
                }}>

                    <TouchableOpacity
                     onPress={removeAll}
                    >
                        <Text style={{fontSize: 18, color: '#868080'}}>Esvaziar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer}>
                        <Text style={{fontSize:21, color: '#FFFF'}}>Continuar</Text>
                    </TouchableOpacity>
                </View>
                    
                </View>
            </View>

            <View style={styles.close}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={{fontSize: 19, color: '#E5E5E5'}}>X</Text>
                </TouchableOpacity>
            </View>
        </Modalize>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    close:{
      position: 'absolute',
      marginLeft: 370,
      marginTop: 10
    
    },
    footer:{
        width: '100%',
        height: 45,
        backgroundColor: '#32B768',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});