import moment from "moment"
import { useSelector } from "react-redux"

export const image_path = "C:/xampp/htdocs/project/image_ecm_g2/"

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