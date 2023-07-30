import React, { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from "react-native"
import Button from "../component/button/Button"
import InputText from "../component/input/InputText"
import Radio from "../component/radio/Radio"

const RegisterScreen = ({ navigation }) => {

    const [firstname,setFirstname] = useState("")
    const [lastname,setLatname] = useState("")
    const [gender,setGender] = useState(1) // 1 male | 0 female
    const [tel,SetTel] = useState("")
    const [email,setEmail] = useState("")
    const [addrss,setAdress] = useState("")

    const [msFirstname,setMsFirstname] = useState(null)
    const [msLastname,setMsLastname] = useState(null)
    const [msPhone,setMsPhone] = useState(null)
    const [msEmail,setMsEmail] = useState(null)

    function ValidateEmail(input) {
        // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (input.match(validRegex)) {
          return true;
        } else {
          return false;
        }
      
    }

    const handleRegister = () => {
       
        // var name = firstname +" "+lastname
        clear()
        var isError = 0
        if(firstname == null || firstname == ""){
            setMsFirstname("First name required!")
            isError = 1
        }
        if(lastname == null || lastname == ""){
            setMsLastname("Last name required!")
            isError=1
        }
        if(tel == null || tel == ""){
            setMsPhone("Tel required!")
            isError=1
        }
       
        if(email != "" && email != null ){
            var isValidEmail = ValidateEmail(email)
            // alert(isValidEmail+"")
            if(isValidEmail == false){
                setMsEmail("Invalid email!")
                isError=1
            }
        }
        
        if(isError == 0){
            var ms = firstname+", "
            ms += lastname+", "
            ms += gender+", "
            ms += tel+", "
            ms += email+", "
            ms += addrss+", "
            alert("data to api : "+ms)
        }
    }

    const clear = () =>{
        setMsEmail(null)
        setMsFirstname(null)
        setMsLastname(null)
        setMsPhone(null)
    }

    return (
        <View style={styles.loginContainer}>
            <View>
                <Text style={styles.textLogin}>Register </Text>
                <View style={styles.row}>
                    <InputText
                        require={true}
                        pr={5}
                        width="50%"
                        msEorror={msFirstname}
                        label={"First name"}
                        placeholder={"First name"}
                        onChangeText={(text) => {
                            setFirstname(text)
                        }}
                    />
                    <InputText
                        require={true}
                        width="50%"
                        pl={5}
                        msEorror={msLastname}
                        label={"Last name"}
                        placeholder={"Last name"}
                        onChangeText={(text) => {
                            setLatname(text)
                        }}
                    />
                </View>
                <View style={[styles.row,{marginBottom:15,marginTop:10}]}>
                    <Text style={{fontSize:16,color:'#000'}}>Gender</Text>
                    <Radio 
                        pl={15}
                        title="Male"
                        active={gender == 1}
                        onPress={()=>{
                            setGender(1)
                        }}
                    />
                    <Radio 
                        title="Female"
                        active={gender == 0}
                        pl={10}
                        onPress={()=>{
                            setGender(0)
                        }}
                    />
                </View>
                <InputText
                    require={true}
                    msEorror={msPhone}
                    label={"Phone"}
                    placeholder={"Phone"}
                    onChangeText={(text) => {
                        SetTel(text)
                    }}
                />
                <InputText
                    label={"Email"}
                    msEorror={msEmail}
                    placeholder={"Email"}
                    onChangeText={(text) => {
                        setEmail(text)
                    }}
                />
                <InputText
                    multiline={true}
                    label={"Adrees"}
                    placeholder={"Adress"}
                    onChangeText={(text) => {
                        setAdress(text)
                    }}
                />
                
                <Button
                    onPress={handleRegister}
                    title={"Register"}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'center',
        marginTop:-40
    },
    textLogin: {
        fontSize:32,
        color:'#000',
        fontWeight:'bold',
        marginBottom:15
    },
    row: {
        flexDirection: "row"
    },
    view1: {
        flex: 1,
        width: 300,
        margin: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: "center"
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: '#449'
    },
    view2: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        padding: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    grido: {
        backgroundColor: "#888",
        padding: 10
    },
    grid1: {
        // backgroundColor:'blue',
        paddingLeft: 10
    },
    grid2: {
        // backgroundColor:'red',
    }

})

export default RegisterScreen
