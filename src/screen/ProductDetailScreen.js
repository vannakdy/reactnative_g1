import React, { useEffect, useState } from "react"
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native"
import { request } from "../util/request"
import MainText from "../component/text/MainText"
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from "../component/button/Button"
import Layout from "../component/layout/Layout"
import {useSelector,useDispatch} from "react-redux"
import { getUserId, getUserProfile } from "../util/service"
import Header from "../component/header/Header"

const ProductDetailScreen = ({
    route,
    navigation
}) => {
    const userId = getUserId();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProductDetails()
    }, [])


    const getProductDetails = () => {
        // route.params.id // get parameter from pre page
        request("product/get-one/" + route.params.id, "get").then(res => {
            if (res) {
                setProduct(res.list[0])
            }
        })
    }

    const addToCart = () => {
        navigation.navigate("Cart")
        return
        var param = {
            product_id: route.params.id,
            customer_id: userId,
            quantity: 1,
        }
        setLoading(true)
        request("cart/create", "post", param).then(res => {
            setLoading(false)
            if (!res.error) {
                alert("Add cart success")
            } else {
                alert(res.message)
            }
        })
    }

    return (
        <Layout 
            title="Product detail"
            loading={loading} 
            isCartIcon={true}
        >
           
            <View>
                <View style={styles.promotionContent}>
                   
                    <MainText title="Free delivery!" style={{ color: "red", fontSize: 24 }} />
                </View>
                {product?.product_id &&
                    <View style={styles.item}>
                        <Image
                            source={{
                                uri: "http://192.168.1.18:81/project/image_ecm_g1/" + product.image
                            }}
                            style={{
                                width: "100%",
                                height: 200,
                            }}
                            resizeMode="contain"
                        />
                        <View style={styles.productDes}>
                            <View style={styles.productName}>
                                <MainText type="main" title={product.name + " | " + product.category_id} />
                                <MainText type="main" title={"$" + product.price} />
                                <MainText title={product.description} />
                            </View>
                            <View>
                                <AntDesign name="hearto" size={24} />
                            </View>
                        </View>
                        <Button onPress={addToCart} title={"Add to bag"} />
                    </View>
                }

                <MainText type="title" title="Product Related" />
            </View>
        </Layout>

    )
}

export default ProductDetailScreen


const styles = StyleSheet.create({
    promotionContent: {
        backgroundColor: "pink",
        height: 100,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    item: {
        backgroundColor: "#FFF",
        padding: 20,

    },
    productDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    productName: {
        width: "80%"
    }
})
