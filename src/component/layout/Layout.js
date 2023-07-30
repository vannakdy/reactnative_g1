
import React from 'react'
import {View,ScrollView} from "react-native"
import styles from './styles'

function Layout({
    children
}) {
  return (
    <ScrollView>
        <View style={styles.container}>
            {children}
        </View>
    </ScrollView>
  )
}

export default Layout
