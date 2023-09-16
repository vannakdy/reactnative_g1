import moment from "moment"
import { useSelector } from "react-redux"

// export const image_path = "C:/xampp/htdocs/project/image_ecm_g2/"
export const image_path = "http://192.168.1.12:81/project/image_ecm_g1/"
export const formatDateClient = (date) => {
    return moment(date).format("DD/MM/YYYY")
}

export const getUserProfile = () => {
    const {profile} = useSelector(state=>state.profile)
    return profile
}

export const getUserId = () => {
    const profile = getUserProfile();
    return profile ? profile.customer_id : null
}