import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.main}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary400,
    padding: 20,
    marginHorizontal: 25,
    marginTop: 20,
    borderRadius: 12,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
