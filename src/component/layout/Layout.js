
import React from 'react'
import {View,ScrollView} from "react-native"
import styles from './styles'
import Loading from '../loading/Loading'

function Layout({
    children,
    loading=false
}) {
  return (
    <ScrollView 
      contentContainerStyle={{flexGrow:1}}
    >
      <Loading loading={loading} />
      <View style={styles.container}>
          {children}
      </View>
    </ScrollView>
  )
}

export default Layout
