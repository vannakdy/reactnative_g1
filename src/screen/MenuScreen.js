import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image,ScrollView,ActivityIndicator } from "react-native"
import axios from "axios"
import { request } from "../util/request"
import { formatDateClient, image_path } from "../util/service"
import Button from "../component/button/Button"
import Loading from "../component/loading/Loading"
import ModalContain from "../component/modal/ModalContain"
import InputText from "../component/input/InputText"
import MainText from "../component/text/MainText"
import AntDesign from "react-native-vector-icons/AntDesign"

const MenuScreen = ({ navigation }) => {
  const [list, setList] = useState([])
  const [loading,setLoading] = useState(false)
  const [visible,setVisible] = useState(false)

  const [id,setId] = useState(null)
  const [name,setName] = useState("")
  const [msName,setMsName] = useState(null)
  
  const [description,setDescriptoin] = useState("")
  const [parentId,setParentId] = useState("")



  useEffect(() => {
    getList()
  }, [])

  const getList = () => {
    setLoading(true)
    request("category/get-list", "get", {}).then(res => {
      setLoading(false)
      if (res) {
        setList(res.list)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const handleRemove = (item) => {
    var category_id = item.category_id
    setLoading(true)
    request("category/remove/"+category_id,"delete",{}).then(res=>{
      setLoading(false)
      if(res){
        getList()
      }
    })
  }

  const onSave = () => {
    // check 
    if(name == null  || name == ""){
      setMsName("Please input category name!")
      return
    }
    setLoading(true)
    setVisible(false)
    var param = {
      name : name,
      description : description,
      parent_id : parentId
    }
    var url = "category/create"
    var method = "post"
    if(id != null){ // mean update
      param.category_id = id 
      url = "category/update"
      method = "put"
    }
    request(url,method,param).then(res=>{
      clearForm()
      if(res){
        getList()
      }
    })
  }

  const clearForm = () =>{
    setId(null)
    setName(""),
    setDescriptoin("")
    setParentId("")
    setVisible(false)
    setLoading(false)
    setMsName(null)
  }

  const onCloseModal = () => {
    setVisible(false)
    clearForm()
  }

  const handleEditBtn = (item) => {
    setVisible(true)
    setId(item.category_id)
    setName(item.name)
    setDescriptoin(item.description)
    setParentId(item.parent_id)
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow:1}}
    >
      
      <View style={{ padding: 15,flex:1 }}>
        <Loading loading={loading} />
        <View style={styles.rowHeader}>
          <Text style={{ color: "#000000", fontSize: 22 }}>Category</Text>
          <Button 
            iconLeft={<AntDesign color={"#FFF"} size={18} name="plus" />} 
            title={"New"} 
            onPress={()=>setVisible(true)}
          />
        </View>
        {list.map((item, index) => {
          return (
            <View key={index} style={styles.list}>
              <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:60,backgroundColor:"#777"}}>

                </View>
                <View style={{paddingLeft:10}}>
                  <Text style={styles.txtMain}>{item.name}</Text>
                  <Text>{item.description}</Text>
                  <Text>{formatDateClient(item.create_at)}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <Button  
                  iconLeft={<AntDesign color={"#FFF"} size={18} name="user" />} 
                  size="sm"  
                  type="danger" 
                  onPress={()=>handleRemove(item)}
                />
                <Button 
                  iconLeft={<AntDesign color={"#FFF"} size={18} name="edit" />} 
                  ml={5}   
                  size="sm"   
                  onPress={()=>handleEditBtn(item)}
                />
              </View>
            </View>
          )
        })}
      </View>

      <ModalContain 
        title={id == null ? "New category" : "Update category"} 
        visible={visible}
        onClose={onCloseModal}
      >
        <InputText 
          value={name}
          label={"Name"}
          placeholder={"Name"}
          onChangeText={(text)=>{
            setName(text)
          }}
          require={true}
          msEorror={msName}
        />

        <InputText
          multiline={true}
          value={description}
          label={"Description"} 
          placeholder={"Description"}
          onChangeText={(text)=>{
            setDescriptoin(text)
          }}
        />

        <InputText
          value={parentId}
          label={"Parent id"} 
          placeholder={"Parent id"}
          onChangeText={(text)=>{
            setParentId(text)
          }}
        />
        <View style={styles.footerModal}>
          <Button type="secondary" title={"Cancel"} onPress={onCloseModal} />
          <Button ml={10} type="success" title={id== null ? "Save" : "Update"} onPress={onSave} />
        </View>
      </ModalContain>
    </ScrollView>
  )
}

export default MenuScreen


const styles = StyleSheet.create({
  rowHeader:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10
  },
  list: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection:"row",
    justifyContent:'space-between'
  },
  txtMain: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  footerModal:{
    flexDirection:'row',
    justifyContent:'flex-end'
  }
})
