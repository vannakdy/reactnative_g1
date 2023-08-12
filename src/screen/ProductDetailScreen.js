import React , {useEffect,useState} from "react"
import { View, Text,Image } from "react-native"
import { request } from "../util/request"
import MainText from "../component/text/MainText"

const ProductDetailScreen = ({
    route
}) => {

    const [product,setProduct] = useState({})

    useEffect(()=>{
        getProductDetails()
    },[])

    const getProductDetails = () => {
        // route.params.id // get parameter from pre page
        request("product/get-one/"+route.params.id,"get").then(res=>{
            if(res){
                setProduct(res.list[0])
            }
        })
    }

    return (
        <View style={{ padding: 15 }}>
            
            {product.product_id && 
                <View>
                    <MainText title={product.name} />
                    <Image
                        source={{
                            uri:"http://192.168.1.15:81/project/image_ecm_g1/"+product.image
                        }}
                        style={{
                            width: "100%", 
                            height: 200,
                        }}
                        resizeMode="contain"
                    />
                     <MainText title={product.description} />
                </View>
            }
            

        </View>
    )
}

export default ProductDetailScreen
