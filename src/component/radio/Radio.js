

import React from 'react'
import styles from './styles'
import { TouchableOpacity,View,Text } from 'react-native'
function Radio({
    onPress,
    active=false,
    title="",
    pl=0
}) {
  return (
    <View style={{paddingLeft:pl}}>
      <TouchableOpacity
        style={styles.row}
        onPress={onPress}
      >
        <View style={styles.box}>
            {active && <View style={styles.active}></View>}
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Radio
