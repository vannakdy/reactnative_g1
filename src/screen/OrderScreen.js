import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { request } from "../util/request"
import MainText from "../component/text/MainText"
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from "../component/button/Button"
import Layout from "../component/layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { getUserId, getUserProfile, image_path } from "../util/service"
import InputText from "../component/input/InputText"
import d from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler"

const OrderScreen = ({
    route,
    navigation
}) => {
    const userId = getUserId();
    const [list, setList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(false)
    const [paymentSelect,setPaymentSelect] = useState("cod")

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

    const onSelectPayment = (item) => {
        setPaymentSelect(item.code)
    }

    const payment = [
        {
            name : "Cash on delivery",
            des : "Cash on delivery",
            code : "cod",
        },
        {
            name : "ABA",
            des : "ABA",
            code : "aba",
        },
        {
            name : "Wing",
            des : "Wing",
            code : "wing",
        }
    ]




    return (
        <>
            <Layout 
                title="Order"
                loading={loading} 
            >
                <View>
                    <View style={styles.promotionContent}>
                        <MainText title="Free delivery!" style={{ color: "red", fontSize: 24 }} />
                    </View>
                    <MainText pb={5} type="main"   title={"Items ("+list.length+")" } />
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
                                                height: 80,
                                            }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View style={styles.grid2}>
                                        <MainText type="main" title={item.p_name} />
                                        <MainText title={"Qty "+item.quantity+", $"+item.price} />
                                        <View style={{alignItems:'flex-end'}} >
                                            <MainText type="main" title={"$"+(item.quantity * item.price)} />
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }

                    <MainText pt={15} pb={5} type="main"   title={"Select adress" } />
                    <View style={styles.addressRow}>
                        <View>
                            <MainText type="main" title="Dara-Chan" />
                            <MainText title="Address desc" />
                            <MainText title="Province" />
                            <MainText title="Tel" />
                        </View>
                        <View>
                           <AntDesign style={{fontSize:22}} name="right" />
                        </View>
                    </View>

                    <MainText pt={15} pb={5} type="main"   title={"Select payment method" } />
                    {payment.map((item,index)=>{
                        return (
                            <TouchableOpacity onPress={()=>onSelectPayment(item)} key={index} style={styles.paymentRow}>
                                <View>
                                    <MainText type="main" title={item.name}/>
                                    <MainText title={item.des} />
                                </View>
                                <View>
                                    {item.code == paymentSelect && <AntDesign style={{fontSize:22}} name="check" />}
                                    
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    


                    <MainText pt={15} type="main"   title={"Comment" } />
                    <InputText  multiline placeholder={"Comment"}/>

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
                <Button onPress={onOrder} title={"Order Now"} />
            </View>
        </>

    )
}

export default OrderScreen


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
        paddingHorizontal:10
    },
    addressRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:10,
        alignItems:"center",
        backgroundColor:'#FFF',
        paddingHorizontal:10
    },
    paymentRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:10,
        alignItems:"center",
        backgroundColor:'#FFF',
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:"#888"
    }
})
