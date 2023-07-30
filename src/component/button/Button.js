
import {View,TouchableOpacity,Text,StyleSheet} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
const Button = ({
    title,
    onPress,
    size="md", //"sm" md lg
    round=true,
    type="primary",
    ml=0,
    mr=0,
    mt=0,
    mb=0,
    iconLeft
}) => {
    var style = {}
    switch(size){
        case "sm": style.height = 30; break;
        case "md": style.height = 36; break;
        case "lg": style.height = 50; break;
    }
    switch(type){
        case "primary": style.backgroundColor = "#0D6EFD"; break;
        case "secondary": style.backgroundColor = "#6C757D"; break;
        case "success": style.backgroundColor = "#157347"; break;
        case "warning": style.backgroundColor = "#FFC107"; break;
        case "danger": style.backgroundColor = "#DC3545"; break;
    }

    style.marginLeft = ml
    style.marginRight = mr
    style.marginTop = mt
    style.marginBottom = mb

    if(round == false){
        style.borderRadius = 0
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btnContainer,style]}
        >
            {iconLeft && 
                <View>
                   {iconLeft} 
                </View>
            }
            {/* <AntDesign color={"#FFF"} size={22} name="close" /> */}
            {title && <Text style={styles.textButton}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor : "#000",
        marginTop:10,
        paddingHorizontal:10,
        justifyContent:'center',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
    textButton:{
        fontWeight:'bold',
        color:'white',
        fontSize:16,
        textAlign:'center'
    }
})