import React from 'react'
import {View,TouchableOpacity,Text} from "react-native"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import {} from "@react-navigation/stack"
import {useNavigation} from "@react-navigation/native"
// import {Feather,SimpleLineIcons} from "react-native-vector-icons"



function Header({
    title,
    // navigation,
    isBack=true,
    isCartIcon=false
}) {
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: title, //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            // fontWeight: 'bold', //Set Header text style
          },
          headerLeft: () => (
            <View>
                {isBack && <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{paddingLeft: 10}}>
                    <Feather
                        name="chevron-left"
                        style={{color:"white"}}
                        size={26}
                    />
                </TouchableOpacity>}
            </View>
          ),
          headerRight: () => (
            <View>
              {isCartIcon && <TouchableOpacity
                onPress={() => navigation.navigate("Cart")}
                style={{marginRight: 10}}>
                <SimpleLineIcons 
                  name="handbag"
                  style={{color:"white"}}
                  size={26}
                />
              </TouchableOpacity>}
            </View>
          ),
        });
    }, [navigation]);

  return (
    <View>
      
    </View>
  )
}

export default Header
