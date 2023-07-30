import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    box:{
        width:25,
        height:25,
        borderWidth:1,
        borderColor:'#888',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    active:{
        width:12,
        height:12,
        backgroundColor:"#000",
        borderRadius:50
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        paddingLeft:10,
        fontSize:15
    }
})