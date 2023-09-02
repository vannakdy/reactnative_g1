import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import Button from "../component/button/Button"
import InputText from "../component/input/InputText"
import { request } from "../util/request"
import {useDispatch} from "react-redux"
import { setProfile } from "../redux/profileSlice"
import Layout from "../component/layout/Layout"

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [errUsername, setErrUsername] = useState(null)
    const [password, setPassword] = useState("")
    const [errPassword, setErrPassword] = useState(null)
    const [errLogin, setErrLogin] = useState(null)
    const [loading,setLoading] = useState(false)

    const handleLogin = () => {
        setErrPassword(null)
        setErrUsername(null)
        setErrLogin(null)
        var isError = false;
        if (username == "") {
            setErrUsername("Please fill in username!")
            isError = true
        }
        if (password == "") {
            isError = true
            setErrPassword("Please fill in password!")
        }
        if (!isError) { // !isError || isError == false
            var param = {
                "username" : username, //"nora@gmail.com",
                "password"  : password //"123456"
            }
            setLoading(true)
            request("customer/login","post",param).then(res=>{
                setLoading(false)
                if(res){
                   if(res.error) {
                    setErrLogin(res.message)
                   }else{
                    // login success store session
                    // react redux toolkit
                    dispatch(setProfile(res))
                    navigation.navigate("Profile")
                    // link
                   }
                }
            })
        }
    }

    return (
        <Layout loading={loading}>
            <View style={styles.loginContainer}>
                <View>
                    <Text style={styles.textLogin}>Login </Text>
                    <InputText
                        msEorror={errUsername}
                        label={"Username"}
                        placeholder={"Username"}
                        onChangeText={(text) => {
                            setUsername(text)
                        }}
                    />
                    <InputText
                        secureTextEntry={true}
                        msEorror={errPassword}
                        label={"Password"}
                        placeholder={"Password"}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                    />
                    <Text style={{ color: 'red',marginBottom:5 }}>{errLogin}</Text>
                    <Button
                        onPress={handleLogin}
                        title={"Login"}
                    />
                </View>
            </View>
        </Layout>
    )
}


const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
        marginTop:-100
    },
    textLogin: {
        fontSize:32,
        color:'#000',
        fontWeight:'bold',
        marginBottom:15
    },
    rowBanner: {
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

export default LoginScreen
