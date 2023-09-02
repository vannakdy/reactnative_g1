import React from 'react'
import {View,ScrollView,Image} from 'react-native'
import Text from '../../text/MainText'
import styles from "./styles"
function HomeSlide({
  data
}) {

  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
      {data?.map((item,index)=>{
        return (
            <View key={index} style={styles.container}>
                <View style={{position:"absolute",left:20,top:20}}>
                 <Text type='title' style={{color:'red'}} title={"50%"} />
                </View>
                {/* <Text title={item.sub_title} /> */}
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
            </View>
        )
      })}
    </ScrollView>
  )
}

export default HomeSlide

