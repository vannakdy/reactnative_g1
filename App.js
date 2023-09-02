import 'react-native-gesture-handler';
import {createStackNavigator,TransitionPresets } from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screen/HomeScreen"
import ProfileScreen from "./src/screen/ProfileScreen"
import MenuScreen from './src/screen/MenuScreen';
import SearchScreen from './src/screen/SearchScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import Ionicons from "react-native-vector-icons/Ionicons"
import EditProfileScreen from './src/screen/EditProfileScreen';
import ChangePasswordScreen from './src/screen/ChangePasswordScreen';
import AddressScreen from './src/screen/AddressScreen';
import VoucherScreen from './src/screen/VoucherScreen';
import WishlistScreen from './src/screen/WishlistScreen';
import {useSelector} from "react-redux"
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import ProductListScreen from './src/screen/ProductListScreen';



const App = () => {
  const {is_login} = useSelector(state=>state.profile)
  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()
  const option = {}
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const ProfileStack = ()=>(
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Vocher" component={VoucherScreen} />
    </Stack.Navigator>
  )

  const HomeScreenStack = () => (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
      <Stack.Screen name='ProductList' component={ProductListScreen} />
      <Stack.Screen name="Login"  component={LoginScreen} />
      
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              return <Ionicons name={"home"} size={22}  color={color}/>;
              // iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }else if (route.name === 'Menu') {
              return <Ionicons name={"menu"} size={22} color={color} />;
              // iconName = focused ? 'ios-list' : 'ios-list-outline';
            }else if(route.name === 'Search'){
              return <Ionicons name={"search"} size={22} color={color} />;
            }else if(route.name === 'Profile'){
              return <Ionicons name={"person"} size={22} color={color} />;
            }else if(route.name == "Wishlist"){
              return <Ionicons name={"heart-outline"} size={22} color={color} />;
            }
          },
          tabBarActiveTintColor: '#0D6EFD', //tomato
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name='Home'
          options={{
            headerShown:false
          }}
          component={HomeScreenStack} //{HomeScreen}
        />
        <Tab.Screen 
          name='Menu'
          component={MenuScreen}
        />
        <Tab.Screen 
          name='Search'
          component={SearchScreen}
        />
        <Tab.Screen 
          name='Wishlist'
          component={WishlistScreen}
          listeners={({ navigation, route }) => ({
            
            tabPress: (e) => {
              if(!is_login){
                // Prevent default action
                e.preventDefault();
                // Do something with the `navigation` object
                navigation.navigate('Login');
              }
            },
          })}
        />
        <Tab.Screen 
          name='Profile'
          options={{
            headerShown:false
          }}
          component={ProfileStack}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              if(!is_login){
                // Prevent default action
                e.preventDefault();
                // Do something with the `navigation` object
                navigation.navigate('Login');
              }
            },
          })}
        />

      </Tab.Navigator>

      {/* <Stack.Navigator >
        <Stack.Screen
          name='Home' component={HomeScreen} 
        />
        <Stack.Screen 
          name='Profile' 
          component={ProfileScreen} 
        />
        <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen
          name='Search' 
          component={SearchScreen} 
        />
        <Stack.Screen 
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen 
          name='Register'
          component={RegisterScreen}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default App


// import { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   Button,
//   TouchableOpacity
// } from "react-native"



// const App = () => {//arrow function

//   const [count, setCount] = useState(0)
//   // state, function
//   var x = 100, y = 20.90;
//   var name = "Bona"
//   var isGirl = true

//   const handleClickMe = () => {
//     setCount(count+1)
//   }

//   const handleClickDecrease = () => {
//     setCount(count - 1)
//   }

//   var product = {
//     id : 1,
//     name : "Macbook Pro 2022",
//     price : 1660,
//     qty : 5
//   }
//   var course = ["React","React Native"]
//   var courses = [
//     {
//       id : 101,
//       name : "C++",
//       price : 10
//     },
//     {
//       id : 102,
//       name : "C#",
//       price : 10
//     },
//     {
//       id : 103,
//       name : "Java",
//       price : 10
//     }
//   ]
//   var tmpCourse = courses[0] // object

//   return (
//     <ScrollView>
//       <View style={{padding:20}}>
//         <Button
//           title="Click me" 
//         />

//         <TouchableOpacity
//           onPress={handleClickMe}
//           style={styles.btnContainer}
//         >
//           <Text style={styles.txtBig}>+</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={handleClickDecrease}
//           style={styles.btnContainer}
//         >
//           <Text style={styles.txtBig}>-</Text>
//         </TouchableOpacity>

//         <Text style={styles.txtNormal}>Count : {count}</Text>

//         <Text style={styles.txtNormal}>Text demo</Text>
//         <Text style={[styles.txtNormal,styles.txtRed]}>{x+y}-{y}-{name}</Text>
//         <Text style={styles.txtNormal}>{name}</Text>
//         <Text style={styles.txtNormal}>{isGirl+""}</Text>
//         <Text style={styles.txtNormal}>{product.id}-{product.name}-{product.price+"$"}-{product.qty}</Text>
//         <Text style={styles.txtNormal}>{course.length}-{course[1]}</Text>
//         <Text style={styles.txtNormal}>{courses[2].id}-{courses[2].name}-{courses[2].price}</Text>
//         <Text style={styles.txtNormal}>{tmpCourse.id}-{tmpCourse.name}-{tmpCourse.price}</Text>

//         <Text style={{fontSize:32,color:'gray',fontWeight:'500'}}>List Course</Text>
//         {course.map((item,index)=>{
//           return (
//             <View 
//               key={index}
//               style={styles.rowCourse}
//             >
//               <Text style={{fontSize:16}}>{index+1}-{item}</Text>
//             </View>
//           )
//         })}

//         <Text style={{fontSize:32,color:'gray',fontWeight:'500',marginTop:10}}>List Courses</Text>
//         {courses.map((item,index)=>{
//           return (
//             <View 
//               key={index}
//               style={styles.rowCourses}
//             >
//               <Text style={{fontSize:16}}>{item.id}-{item.name}</Text>
//               <Text style={{fontSize:16,color:"blue"}}>{item.price}$</Text>
//             </View>
//           )
//         })}


//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   btnContainer:{
//     backgroundColor : "black",
//     marginTop:2,
//     padding:10,
//     borderRadius:5,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   txtBig : {
//     fontSize : 22,
//     fontWeight : 'bold',
//     color : "white"
//   },
//   txtNormal : {
//     fontSize : 22,
//     color : "#000000"
//   },
//   txtRed : {
//     color : "red"
//   },
//   rowCourse : {
//     paddingTop : 10,
//     paddingBottom:5,
//     borderBottomWidth :1,
//     borderBottomColor : "#888",
//     backgroundColor : "pink"
//   },
//   rowCourses : {
//     paddingTop : 10,
//     paddingBottom:5,
//     borderBottomWidth :1,
//     borderBottomColor : "#888",
//     flexDirection : "row",
//     justifyContent : 'space-between',
//     backgroundColor : "red"
//   }
// })

// export default App;




// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  */

// // import React from 'react';
// // import type {PropsWithChildren} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({children, title}: SectionProps): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// // function App(): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// //         backgroundColor={backgroundStyle.backgroundColor}
// //       />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         {/* <Header /> */}
// //         <Text style={{fontSize:30,padding:10,fontWeight:'bold'}}>Hello NIT Cambodia</Text>
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// // export default App;
