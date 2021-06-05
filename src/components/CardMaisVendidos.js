import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { Image } from 'react-native-elements'

export default ({products}) => {


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
        height: 110,
        width: 150,
        alignItems: 'center',
        marginTop: 12,
        marginRight: 2,
        marginLeft:3
    },
    image:{
        height: 110,
        width: 140,
    },
    enviromentList:{

    },
    name:{

    }

})