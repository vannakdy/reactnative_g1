import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'
function MainText({
    title="",
    type="defuat", // defuat  | main | title
    pl=0,
    pr=0,
    pt=0,
    pb=0,
    numberOfLines=1
}) {
    var sty = {}
    switch(type){
        case "defuat" : sty=styles.default; break;
        case "main" : sty=styles.main; break;
        case "title" : sty=styles.title; break;
    }
    sty = {
        ...sty,
        paddingLeft:pl,
        paddingRight:pr,
        paddingTop:pt,
        paddingBottom:pb,
    }
    return (
        <View>
            <Text numberOfLines={numberOfLines} style={sty}>{title}</Text>
        </View>
    )
}

export default MainText
