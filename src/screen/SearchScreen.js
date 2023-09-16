import {View,Text} from "react-native"
import Layout from "../component/layout/Layout"

const SearchScreen = () => {

  return (
    <Layout
      title="Search"
      isBack={false}
    >
      <View style={{padding:15}}>
          <Text style={{color:"#000000",fontSize:22}}>Search</Text>
      </View>
    </Layout>
  )
}

export default SearchScreen
