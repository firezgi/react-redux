import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';

function IsLogged({isLogged,changeIsLogged,counter}) {
  
  
  console.log(isLogged)
  return (
    <View style={styles.container}>    
        <View
        style={{
          flexDirection: "row",
          width: 200,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={()=>changeIsLogged()}>
          <Text style={{ fontSize: 20 }}>Log in</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

function mapStateToProps(state){
    return{
        isLogged:state.isLogged,
        counter:state.counter,
    }
}

function mapDispatchToProps(dispatch) {
  return {
      changeIsLogged: () => dispatch({ type: 'IS_LOGGED'}),
       }
}
export default connect(mapStateToProps,mapDispatchToProps)(IsLogged);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});