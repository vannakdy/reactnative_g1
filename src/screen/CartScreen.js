import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { request } from "../util/request"
import MainText from "../component/text/MainText"
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from "../component/button/Button"
import Layout from "../component/layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { getUserId, getUserProfile, image_path } from "../util/service"

const CartScreen = ({
    route,
    navigation
}) => {
    const userId = getUserId();
    const [list, setList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        setLoading(true)
        request("cart/by-customer/"+ userId, "get").then(res => {
            setLoading(false)
            if (res) {
                if (!res.error) {
                    var totalPrice = 0
                    res.list.map((item,index)=>{
                        totalPrice += (item.quantity * item.price)
                    })
                    setList(res.list);
                    setTotalPrice(totalPrice)
                } else {
                    alert(res.message)
                }
            }
        })
    }

    const onOrder = () => {
        navigation.navigate("Order")
    }


    return (
        <>
            <Layout 
                title="Cart"
                loading={loading} 
                isCartIcon={true}
            >
                <View>
                    <View style={styles.promotionContent}>
                        <MainText title="Free delivery!" style={{ color: "red", fontSize: 24 }} />
                    </View>
                    <View style={styles.promotionContent}>
                        <MainText title="Free delivery!" style={{ color: "red", fontSize: 24 }} />
                    </View>
                    
                    {
                        list?.map((item, index) => {
                            return (
                                <View style={styles.rowCart} key={index}>
                                    <View style={styles.grid1}>
                                        <Image
                                            source={{
                                                uri: image_path + item.p_image
                                            }}
                                            style={{
                                                width: "100%",
                                                height: 120,
                                            }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.grid2}>
                                        <MainText type="main" title={item.p_name} />
                                        <MainText title={"Quantity. "+item.quantity} />
                                        <MainText type="main" title={"Price. $"+item.price} />
                                        <View style={styles.rowQuantity}>
                                            <Button mr={10} title={"-"} />
                                            <Button title={"+"} />
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.rowTotal}>
                    <MainText type="main" title="Sub Total"/>
                    <MainText type="main" title={"$"+totalPrice}/>
                </View>
                <View style={styles.rowTotal}>
                    <MainText type="main" title="Total"/>
                    <MainText type="main" title={"$"+totalPrice}/>
                </View>
            
            </Layout>
            <View style={{padding:10}}>
                <Button onPress={onOrder} title={"Order"} />
            </View>
        </>

    )
}

export default CartScreen


const styles = StyleSheet.create({
    promotionContent: {
        backgroundColor: "pink",
        height: 100,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    rowCart: {
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderBottomWidth:1,
        borderBottomColor:"#eee",
        paddingVertical:10
    },
    rowTotal: {
        flexDirection:"row",
        backgroundColor:"#FFF",
        paddingVertical:5,
        paddingHorizontal:10,
        justifyContent:"space-between"
    },
    rowQuantity:{
        flexDirection:"row",
    },
    grid1: {
        width: "40%",
    },
    grid2: {
        width: "60%",
        paddingLeft:10
    }
})
