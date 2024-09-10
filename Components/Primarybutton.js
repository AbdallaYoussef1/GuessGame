import { Pressable, StyleSheet, Text, View } from "react-native";

const Primarybutton = ({ children, onPressHandler }) => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{
          color: "#d3297e",
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
    backgroundColor: "#ac0a5b",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
