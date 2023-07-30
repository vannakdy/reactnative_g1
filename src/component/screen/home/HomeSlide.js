import React from 'react'
import {View,ScrollView} from 'react-native'
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
                <Text type='title' title={item.title} />
                <Text title={item.sub_title} />
            </View>
        )
      })}
    </ScrollView>
  )
}

export default HomeSlide

