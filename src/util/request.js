import axios from "axios"
const base_url = "http://192.168.1.17:8080/api/"
export const request = (url,method,param) => {
    return axios({
        url : base_url+ url,
        method : method,
        data : param,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, 
    }).then(res=>{
        return res.data
    }).catch(err=>{
        alert("Error!")
        return false
    })
}