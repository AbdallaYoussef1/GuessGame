import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";


const Primarybutton = ({ children, onPress }) => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{
          color: Colors.primary300,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default Primarybutton;

const styles = StyleSheet.create({
  main: {
    borderRadius: 25,
    margin: 10,
    overflow: "hidden",
  },
  innerContainer: {
    elevation: 10,
    padding: 10,
    backgroundColor: Colors.primary200,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
