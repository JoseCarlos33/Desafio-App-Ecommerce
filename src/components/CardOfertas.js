import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { Image } from 'react-native-elements'
import {useCart} from '../context/productsContext'

export default ({products}) => {

    const {add} = useCart()

    return(
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={products}
                renderItem={({item}) => {
                    return(  
                        <View style={styles.item}>
                            <Image
                                style={item.id==3 ? [styles.image, {marginRight: -50}] : styles.image}
                                resizeMode='contain'
                                source={{ uri: item.image}}
                            />
                            <View style={styles.description}>
                                <Text style={{fontSize: 18, color: '#303030', fontWeight: 'bold'}}>
                                    R${item.price}
                                </Text>
                                <Text style={styles.name}>{item.description}</Text>
                            </View>
                            <TouchableOpacity 
                                onPress={() => add(item)}
                                style={item.description=='Presunto Sadia' ? [styles.button, {marginTop: 8}] : styles.button}
                            >
                                <Text style={styles.add}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.enviromentList}
            />
    )
}

const styles = StyleSheet.create({
    item:{
        height: 300,
        width: 150,
        // borderColor: '#313131',
        // borderWidth: 1,
        alignItems: 'center',
        marginTop: 10,
        marginRight: 2,
        marginLeft: 3
    },
    image:{
        height: 120,
        width: 140,
    },
    add:{
        fontSize: 21,
        color: '#338E58',
    },
    name:{
        color: '#303030',
        fontSize: 18,
        marginTop: 5
    },
    button:{
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        width: 130,
        alignItems: 'center',
        height: 30,
        marginTop: 30
        
    },
    description:{
        marginTop: 10,
        marginBottom:5,
        marginHorizontal: 12,
        width: '80%',
        justifyContent: 'flex-start'
    }

})