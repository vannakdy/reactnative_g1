

import React from 'react'
import { View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import Text from '../../text/MainText'
import styles from "./styles"

function HomeHotItem({
    title,
    data,
    navigation
}) {

    const onPressItem = (item) => {
        // alert(item.id)

        // // just link
        // navigation.navigate("ProductDetail") 

        // link with param
        navigation.navigate("ProductDetail",{
            id : item.product_id
        }) 
    }

    return (
        <View>
            <Text pt={15} title={title} type='title' />
            <FlatList
                data={data}
                keyExtractor={item => item.title}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => onPressItem(item)} key={index} style={styles.ht_container}>
                            <Text title={item.name} />
                            <Text title={item.sub_title} />
                            {item.image != null && <Image
                                // source={{
                                //     uri : "https://zandokh.com/image/cache/catalog/products/2023-07/4112304031/BL/KNIT-TANK-TOP (1)-cr-450x672.jpg"
                                // }}
                                // source={require("../../../assets/home/home-hotitems/1.png")}

                                // source={item.image}
                                source={{
                                    uri:"http://192.168.1.15:81/project/image_ecm_g1/"+item.image
                                }}
                                
                                style={{
                                    width: "100%",
                                    height: 200,
                                }}
                                resizeMode="contain"
                            />
                            }
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default HomeHotItem
