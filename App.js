import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from './app/screens/HomeScreen'
// import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
// import coffees from "./app/config/coffees";
// // import styles from './app/screens/Styles'
import colors from './app/config/colors'

const App = () => {
  return (
    <View style={styles.main}>
      <HomeScreen/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
