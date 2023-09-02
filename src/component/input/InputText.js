
import {View,TouchableOpacity,Text,StyleSheet,TextInput} from "react-native"

const InputText = ({ // function component
    label,
    placeholder,
    onChangeText,
    require=false,
    msEorror,
    width="100%",
    pl=0,
    pr=0,
    pt=0,
    pb=0,
    multiline=false,
    value,
    secureTextEntry=false
}) => {
    const borderColor = (msEorror != null ? "red" : "#666")
    return (
        <View style={{width:width,paddingLeft:pl,paddingRight:pr}}>
            <Text style={styles.textLabel}>{label} {require && "*"}</Text>
            <View style={[styles.inputContainer,{ borderColor:borderColor,height:multiline ? 60 : 45}]} >
                <TextInput
                    secureTextEntry={secureTextEntry}
                    value={value} 
                    multiline={multiline}
                    numberOfLines={2}
                    style={styles.inputText}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
            </View>
            <Text style={styles.textError}>{msEorror}</Text>
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    inputContainer:{
        // height:45,
        borderWidth:1,
        borderRadius:5,
    },
    inputText:{
        fontSize:15,
        paddingHorizontal:10
    },
    textLabel:{
        fontSize:16,
        color:'#000',
        marginBottom:5
    },
    textError:{
        color:'red'
    }
    
})