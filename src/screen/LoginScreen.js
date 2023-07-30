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
const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState("")
    const [errUsername, setErrUsername] = useState(null)
    const [password, setPassword] = useState("")
    const [errPassword, setErrPassword] = useState(null)
    const [errLogin, setErrLogin] = useState(null)

    const usernameTmp = "admin", passwordTmp = "2361"
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
            if (username != usernameTmp || password != passwordTmp) {
                setErrLogin("Username or password incorrect!");
            } else {
                alert(username + ", " + password) // past data to server
            }

        }

    }
    return (
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
                    msEorror={errPassword}
                    label={"Password"}
                    placeholder={"Password"}
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                />
                <Text style={{ color: 'red' }}>{errLogin}</Text>
                <Button
                    onPress={handleLogin}
                    title={"Login"}
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
