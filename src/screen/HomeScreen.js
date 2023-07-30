import React, {useState}  from "react"
import Layout from "../component/layout/Layout"
import HomeSlide from "../component/screen/home/HomeSlide"
import HomeHotItem from "../component/screen/home/HomeHotItem"
import {dataHomeSlide,dataHotItems,dataTopSales} from "../component/screen/home/home_data"
const HomeScreen = ({navigation}) => {
  return (
    <Layout>
      <HomeSlide 
        data={dataHomeSlide}
      />
      <HomeHotItem
        title={"Hot Items"} 
        data={dataHotItems}
      />
      <HomeHotItem 
        title={"Top Sales"}
        data={dataTopSales}
      />
    </Layout>
  )
}



export default HomeScreen
