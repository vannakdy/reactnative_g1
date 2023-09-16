import React, {useState}  from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native"
import Button from "../component/button/Button"
import InputText from "../component/input/InputText"
import Entypo  from "react-native-vector-icons/Entypo"
import Layout from "../component/layout/Layout"
const WishlistScreen = ({navigation}) => {
  return (
    <Layout
      title="Wishlist"
      isBack={false}
    >
      <View>

      </View>
    </Layout>
  )
}


const styles = StyleSheet.create({
  rowBanner:{
    flexDirection:"row"
  },
  view1:{
    flex:1,
    width:300,
    margin:1,
    height : 200,
    alignItems:'center',
    justifyContent : "center"
  },
  box1:{
    width:100,
    height:100,
    backgroundColor:'#449'
  },
  view2:{
    flexDirection:'row',
    backgroundColor:'pink',
    padding:10,
    justifyContent:'space-between',
    borderBottomWidth : 1,
    borderBottomColor : "#eee"
  },
  grido:{
    backgroundColor:"#888",
    padding:10
  },
  grid1 : {
    // backgroundColor:'blue',
    paddingLeft:10
  },
  grid2 : {
    // backgroundColor:'red',
  }

})

export default WishlistScreen
