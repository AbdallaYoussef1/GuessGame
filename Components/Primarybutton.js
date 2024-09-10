import { StyleSheet, Text, View } from "react-native";

const Primarybutton = ({children}) => {
  return (
    <View style={styles.main}>
      <Text>{children}</Text>
    </View>
  );
};
export default Primarybutton;

const styles = StyleSheet.create({
    main:{

    },
});