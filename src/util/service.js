import moment from "moment"

export const image_path = "C:/xampp/htdocs/project/image_ecm_g2/"

export const formatDateClient = (date) => {
    return moment(date).format("DD/MM/YYYY")
}