import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { Image } from 'react-native-elements'
import {useCart} from '../context/productsContext'

export default () => {

    const {cart} = useCart()

    return(
            <FlatList
                keyExtractor={(item) => item.id}
                data={cart}
                renderItem={({item}) => {
                    return(  
                        <View style={styles.item}>
                            <Image
                                style={item.id==3 ? [styles.image, {marginRight: -10}] : styles.image}
                                resizeMode='contain'
                                source={{ uri: item.image}}
                            />
                            <Text style={{fontSize: 18}}>{item.description}</Text>
    
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.enviromentList}
            />
    )
}

const styles = StyleSheet.create({
    item:{
        height: 100,
        width: "100%",
        // borderColor: '#313131',
        // borderWidth: 5,
        alignItems: 'center',
        marginTop: 12,
        flexDirection: 'row',
        backgroundColor: '#FFFF'
    },
    image:{
        marginLeft: 20,
        height: 85,
        width: 85,
    },
    enviromentList:{

    },

})