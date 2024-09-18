import { StyleSheet, Text, View } from "react-native";

const HeaderInstruction = ({ children }) => {
  return (
    <View>
      <Text style={styles.main}>{children}</Text>
    </View>
  );
};
export default HeaderInstruction;

const styles = StyleSheet.create({
  main: {
    fontSize: 23,
    color: Colors.primary100,
  },
});
