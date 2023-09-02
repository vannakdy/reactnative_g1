import React, {useState,useEffect}  from "react"
import Layout from "../component/layout/Layout"
import HomeSlide from "../component/screen/home/HomeSlide"
import HomeHotItem from "../component/screen/home/HomeHotItem"
import {dataHomeSlide,dataHotItems,dataTopSales} from "../component/screen/home/home_data"
import { request } from "../util/request"
import Button from "../component/button/Button"
import {useSelector} from "react-redux"

const HomeScreen = ({navigation}) => {

  const {profile,is_login} = useSelector(state=>state.profile)

  const [home,setHome] = useState({})

  useEffect(()=>{
    getHome()
  },[])

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    // navigation.setOptions({
    //   headerRight: () => (
    //     <Button onPress={() => alert(11)} title="Update count" />
    //   ),
    // });
  }, [navigation]);

  const getHome = () => {
    request("get-home","get").then(res=>{
      if(res){
        setHome(res)
      }
    })
  }
  
  return (
    <Layout>
      <HomeSlide 
        data={home.hotItems}
      />
      <HomeHotItem
        navigation={navigation}
        title={"Hot Items"} 
        data={home.hotItems}
      />
      <HomeHotItem 
        navigation={navigation}
        title={"Top Sales"}
        data={home.topSales}
      />
    </Layout>
  )
}



export default HomeScreen
