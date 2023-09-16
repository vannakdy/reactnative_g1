
import React, {useEffect} from "react"
import {View,StyleSheet,TouchableOpacity} from "react-native"
import Layout from "../component/layout/Layout"
import Text from "../component/text/MainText"
import Entypo from "react-native-vector-icons/Entypo"
import {useDispatch,useSelector} from "react-redux"
import { logOut } from "../redux/profileSlice"
const data_profile = [
  {
    title:"Edit Profile",
    route:"EditProfile"
  },
  {
    title:"Change password",
    route:"ChangePassword"
  },
  {
    title:"Address",
    route:"Address"
  },
  {
    title:"Voucher",
    route:"Voucher"
  },
]
const data_setting = [
  {
    title:"Language",
    route:"Language"
  },
  {
    title:"Theme",
    route:"Theme"
  },
  {
    title:"Logout",
    route:"Logout"
  }
]

const ProfileScreen = ({navigation}) => {
   const dispatch = useDispatch()
   const {profile} = useSelector(state=>state.profile)
  // useEffect(() => {
  //   navigation.navigate("Login")
  // }, [navigation]);

  const onPressProfile = (item) => {
    navigation.navigate(item.route)
  }
  const onPressSetting = (item) => {
    if(item.route == "Logout"){
      dispatch(logOut())
      navigation.navigate("Home")
    }
  }
  return (
    <Layout
      title="Profile"
      isBack={false}
      loading={false}
    >
      <View 
        style={{
          height:160,
          alignItems:'center',
          justifyContent:"center"
        }}
      >
        <View style={{height:80,width:80,backgroundColor:'#FFF',borderRadius:100}} />
        <Text type="title" title={profile?.tel} />
        <Text  title={profile?.email} />
      </View>
      <Text type="title" title="Profile" />
      {data_profile.map((item,index)=>{
        return (
          <TouchableOpacity onPress={()=>onPressProfile(item)} key={index} style={styles.rowItem}>
              <Text title={item.title}/>
              <Entypo name="chevron-small-right" size={24}/>
          </TouchableOpacity>
        )
      })}
      <Text type="title" title="Setting" />
      {data_setting.map((item,index)=>{
        return (
          <TouchableOpacity onPress={()=>onPressSetting(item)} key={index} style={styles.rowItem}>
              <Text title={item.title}/>
              <Entypo name="chevron-small-right" size={24}/>
          </TouchableOpacity>
        )
      })}
    </Layout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  rowItem : {
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:"#888",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }
})


// import {
//   Animated,
//   View,
//   Text,
//   Pressable,
//   Button,
//   StyleSheet,
// } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { useCardAnimation } from '@react-navigation/stack';

// function ModalScreen({ navigation }) {
//   const { colors } = useTheme();
//   const { current } = useCardAnimation();

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Pressable
//         style={[
//           StyleSheet.absoluteFill,
//           { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//         ]}
//         onPress={navigation.goBack}
//       />
//       <Animated.View
//         style={{
//           padding: 16,
//           width: '90%',
//           maxWidth: 400,
//           borderRadius: 3,
//           backgroundColor: colors.card,
//           transform: [
//             {
//               scale: current.progress.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0.9, 1],
//                 extrapolate: 'clamp',
//               }),
//             },
//           ],
//         }}
//       >
//         <Text>
//           Mise en place is a French term that literally means “put in place.” It
//           also refers to a way cooks in professional kitchens and restaurants
//           set up their work stations—first by gathering all ingredients for a
//           recipes, partially preparing them (like measuring out and chopping),
//           and setting them all near each other. Setting up mise en place before
//           cooking is another top tip for home cooks, as it seriously helps with
//           organization. It’ll pretty much guarantee you never forget to add an
//           ingredient and save you time from running back and forth from the
//           pantry ten times.
//         </Text>
//         <Button
//           title="Okay"
//           color={colors.primary}
//           style={{ alignSelf: 'flex-end' }}
//           onPress={navigation.goBack}
//         />
//       </Animated.View>
//     </View>
//   );
// }

// export default ModalScreen


// // import {View,Text, Button} from "react-native"

// // const ProfileScreen = ({navigation}) => {

// //   return (
// //     <View style={{padding:15}}>
// //         <Text style={{color:"#000000",fontSize:22}}>Profile</Text>
// //         <Button
// //           title="Goto Menu"
// //           onPress={()=>navigation.navigate("Menu")}
// //         />
// //         <Button
// //           title="Goto Back"
// //           onPress={()=>navigation.navigate("Home")}
// //         />
// //     </View>
// //   )
// // }

// // export default ProfileScreen
