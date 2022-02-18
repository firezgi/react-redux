import CounterApp from "./scr/Counter";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { reducer } from "./scr/Reducer";
import IsLogged from "./scr/IsLogged";

const initialState = {
  counter: 0,
  isLogged:false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'INCREASE_COUNTER':
          return { counter: state.counter + action.payload }
      case 'DECREASE_COUNTER':
          return { counter: state.counter -action.payload }
      case 'IS_LOGGED':
          return { isLogged:!state.isLogged }
  }
  return state
}
const store = createStore(reducer);

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <CounterApp  />
        <IsLogged/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
