import React from 'react'
import {ActivityIndicator,View,StyleSheet} from "react-native"
import Text from '../text/MainText'
function Loading({
    loading = false
}) {
    if(!loading) return null
    return (
        <View style={styles.container}>
            <View style={styles.containLoad}>
                <ActivityIndicator 
                    size={"large"}
                />
                <Text title='Loading...' />
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container :{ 
        flex:1,
        position:"absolute",
        zIndex : 1000,
        top:0,
        left:0,
        bottom:0,
        right:0,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)'
    },
    containLoad:{
        backgroundColor : "#f9f9f9",
        width : 80,
        height:80,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10
    }

})
