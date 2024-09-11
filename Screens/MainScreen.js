import { StyleSheet, Text, View } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.main}>
      <Text>MainScreen</Text>
      <Text>MainScreen</Text>
      <Text>MainScreen</Text>
      <Text>MainScreen</Text>
    </View>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
    main:{
      flex: 1,
      padding:40
    },
});