import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';

function CounterApp({increaseCounter,decreaseCounter,counter,isLogged}) {
  
    console.log(counter)
  console.log(isLogged)
  return (
    <View style={styles.container}> 
    {/* {isLogged?( */}
        <View
        style={{
          flexDirection: "row",
          width: 200,
          justifyContent: "space-around",
        }}
      >
          
        <TouchableOpacity onPress={()=>increaseCounter(5)}>
          <Text style={{ fontSize: 20 }}>Increase</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
        <TouchableOpacity onPress={()=>decreaseCounter(5)}>
          <Text style={{ fontSize: 20 }}>Decrease</Text>
        </TouchableOpacity>
      </View>
    {/* ): <Text>'You have to log in to access'</Text>}    */}
        
      
      <StatusBar style="auto" />
    </View>
  );
}

function mapStateToProps(state){
    return{
        counter:state.counter,
        isLogged:state.isLogged
    }
}

function mapDispatchToProps(dispatch) {
  return {
      increaseCounter: (num) => dispatch({ type: 'INCREASE_COUNTER',payload:num}),
      decreaseCounter: (num) => dispatch({ type: 'DECREASE_COUNTER',payload:num}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});