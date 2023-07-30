

import React from 'react'
import {View,ScrollView, FlatList, Image} from 'react-native'
import Text from '../../text/MainText'
import styles from "./styles"

function HomeHotItem({
    title,
    data
}) {
  
  return (
    <View>
        <Text pt={15} title={title} type='title' />
        <FlatList 
            data={data}
            keyExtractor={item=>item.title}
            numColumns={2}
            renderItem={({item,index})=>{
                return (
                    <View key={index} style={styles.ht_container}>
                        <Text type='title' title={item.title} />
                        <Text title={item.sub_title} />
                        {item.image != null && <Image 
                                // source={{
                                //     uri : "https://zandokh.com/image/cache/catalog/products/2023-07/4112304031/BL/KNIT-TANK-TOP (1)-cr-450x672.jpg"
                                // }}
                                // source={require("../../../assets/home/home-hotitems/1.png")}
                                source={item.image}
                                style={{
                                    width: "100%",
                                    height: 200,
                                }}
                                resizeMode="contain"
                            />
                        }
                    </View>
                )
            }}
        />
    </View>
  )
}

export default HomeHotItem
