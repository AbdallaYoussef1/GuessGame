import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/Colors";
import Title from "../Components/UI/Title";
import Primarybutton from "../Components/UI/Primarybutton";

const GameOverScreen = () => {
  return (
    <View style={styles.main}>
      <Title>Game Over</Title>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.TextContainer}>
        Your phone needed <Text style={styles.TextHighlight}>X</Text> Rounds to
        guess the number
        <Text style={styles.TextHighlight}>Y</Text>.
      </Text>
      <Primarybutton>Start A new Game</Primarybutton>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderColor: Colors.primary400,
    borderWidth: 5,
    overflow: "hidden",
    marginTop: 25,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  TextContainer: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 18,
  },
  TextHighlight: {
    color: Colors.primary600,
  },
});
