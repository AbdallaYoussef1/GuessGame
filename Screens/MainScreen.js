import { StyleSheet, Text, View } from "react-native";
import Title from "../Components/UI/Title";
import { useState } from "react";
import NumberContainer from "../Components/Game/NumberContainer";

function GenerateRandomNumber(min, max, exclude) {
  const RNDNum = Math.floor(Math.random() * (max - min) + min);
  if (RNDNum === exclude) {
    return GenerateRandomNumber(min, max, exclude);
  } else {
    return RNDNum;
  }
}
const MainScreen = ({CheckedNumber}) => {
  const initialGuess = GenerateRandomNumber(1, 100, CheckedNumber)
  const [CurrentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.main}>
      <Title>Opponent's Guessing</Title>
      <NumberContainer>{CurrentGuess}</NumberContainer>
    </View>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 40,
    paddingTop: 60,
  },
});
