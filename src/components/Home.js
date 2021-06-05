import React, { useEffect } from 'react';
import { 
  View,
  StyleSheet,
  Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import CardOfertas from './CardOfertas';
import CardMaisVendidos from './CardMaisVendidos';
import Header from './Header';
import {useCart} from '../context/productsContext'

export default function Home({onOpen, products}){
    const {totalValue, cart} = useCart()
    const precoTotal = totalValue
    const pedidos = Object.keys(cart).length

    return (
        <View style={styles.container}>

            <Header onOpen={onOpen}/>

            <View style={styles.main}>
                <View>
                    <View style={styles.title}>
                        <Text style={styles.subTitle}>
                            Ofertas
                        </Text>
                        <TouchableOpacity style={styles.botaoVerMais}>
                            <Text style={styles.textoBotaoVerMais}>
                                Ver mais
                            </Text>
                            <Icon name='angle-right' color='#32B768' size={21}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.produtos}>
                        <CardOfertas products={products}/>
                    </View>
                </View>

                <View style={{marginTop:10}}>
                    <View style={styles.title}>
                        <Text style={styles.subTitle}>
                            Produtos Mais Vendidos
                        </Text>

                        <TouchableOpacity style={styles.botaoVerMais}>
                            <Text style={styles.textoBotaoVerMais}>
                                Ver mais
                            </Text>
                            <Icon name='angle-right' color='#32B768' size={21}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.produtos2]}>
                        <View style={{height: 120}}>
                            <CardMaisVendidos products={products}/>
                        </View>
                        
                        <TouchableOpacity 
                            style={styles.footer}
                            activeOpacity={0.3}
                            onPress={onOpen}   
                        >
                            <View style={styles.pedidosBotao}>
                                <Text style={{fontSize: 18, color: '#FFF'}}>
                                    {pedidos>0 ? pedidos : 0}
                                </Text>
                            </View>
                            <Text style={styles.titleButton}>Ver cesta</Text>
                            <Text style={styles.valueFooter}>R$ {precoTotal>0 ? precoTotal.toFixed(2) : '00.00'}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    main:{
        flex:1,
        justifyContent: 'space-between'
    },
    pedidosBotao:{
        width: 30,
        height: 30,
        backgroundColor: '#338E58',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 5,
    },
    title:{
        height: 45,
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subTitle:{
        fontWeight: 'bold', 
        fontSize:21,
        color: '#303030',
        marginLeft:10
    },
    produtos:{
        height: 320,
        marginTop: 2,
        backgroundColor: '#FFFF'
    },
    produtos2:{
        height: 181,
        marginTop: 2,
        backgroundColor: '#FFFF',
        justifyContent: 'space-between'
    },
    footer:{
        width: '100%',
        height: 45,
        backgroundColor: '#32B768',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFF',
        justifyContent: 'center',
        marginLeft: '27%'
    },
    valueFooter:{
        marginRight: 10,
        color: '#FFFF',
        fontSize: 16,
        marginLeft: '27%'
    },
    botaoVerMais:{
        flexDirection: 'row',
        marginRight:10
    },
    textoBotaoVerMais:{
        color: '#32B768',
        fontWeight: 'bold',
        marginRight: 5
    }

});