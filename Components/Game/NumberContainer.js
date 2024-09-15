import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
};
export default NumberContainer;

const styles = StyleSheet.create({
  main: {
    borderWidth: 3,
    borderColor: Colors.primary100,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary100,
  },
});
