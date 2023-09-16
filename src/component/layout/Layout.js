
import React from 'react'
import {View,ScrollView} from "react-native"
import styles from './styles'
import Loading from '../loading/Loading'
import Header from '../header/Header'

function Layout({
    title="",
    loading=false,
    navigation,
    children,

    isBack=true,
    isCartIcon=false
}) {
  
  return (
    <View style={{flex:1}}>
      <Header 
        title={title}
        isBack={isBack}
        isCartIcon={isCartIcon}
        navigation={navigation} 
      />
      <ScrollView 
        contentContainerStyle={{flexGrow:1}}
      >
        
        <Loading loading={loading} />
        <View style={styles.container}>
            {children}
        </View>
      </ScrollView>
    </View>
  )
}

export default Layout
