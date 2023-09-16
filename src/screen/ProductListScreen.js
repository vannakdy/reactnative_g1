import React , {useEffect,useState} from "react"
import { View, Text,Image,StyleSheet } from "react-native"
import { request } from "../util/request"
import MainText from "../component/text/MainText"
import Layout from "../component/layout/Layout"
import Button from "../component/button/Button"
import AntDesign from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler"

const ProductListScreen = ({
    route,
    navigation
}) => {

    const [product,setProduct] = useState([])

    useEffect(()=>{
        getList()
    },[])

    const getList = () => {
        request("product/get-list-by-category","post",{id:route.params.id}).then(res=>{
            if(res){
                setProduct(res.list)
            }else{
                alert("ERRRRR")
            }
        })
    }

    const onPressItem = (item) => {
        navigation.navigate("ProductDetail",{id:item.product_id})
    }

    return (
       <Layout
            title="List"
            isCartIcon={true}
       >
            {product?.map((item,index)=>{
                return(
                    <TouchableOpacity onPress={()=>onPressItem(item)} key={index} style={styles.constianer}>
                        <Image
                            source={{
                                uri:"http://192.168.1.18:81/project/image_ecm_g1/"+item.image
                            }}
                            style={{
                                width: "100%", 
                                height: 200,
                            }}
                            resizeMode="contain"
                        />
                        <View style={styles.productDes}>
                            <View style={styles.productName}>
                                <MainText type="main" title={item.name+" | "+item.category_id} />
                                <MainText type="main" title={"$"+item.price} />
                                <MainText title={item.description} />
                            </View>
                            <View>
                                <AntDesign name="hearto" size={24}  />
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </Layout>
    )
}

export default ProductListScreen


const styles = StyleSheet.create({
    constianer:{
        backgroundColor:"#FFF",
        marginBottom:20,
        padding:10
    },
    productDes:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    productName:{
        width:"80%"
    }
})