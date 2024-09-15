import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";


const Title = ({ children }) => {
  return <Text style={styles.main}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  main: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary100,
    padding: 12,
  },
});
