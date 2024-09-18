import { Alert, StyleSheet, View } from "react-native";
import Title from "../Components/UI/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../Components/Game/NumberContainer";
import Primarybutton from "../Components/UI/Primarybutton";
import Card from "../Components/UI/Card";
import HeaderInstruction from "../Components/UI/HeaderInstruction";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../Constants/Colors";

function GenerateRandomNumber(min, max, exclude) {
  const RNDNum = Math.floor(Math.random() * (max - min) + min);
  if (RNDNum === exclude) {
    return GenerateRandomNumber(min, max, exclude);
  } else {
    return RNDNum;
  }
}
let maxNumber = 100;
let minNumber = 1;
const MainScreen = ({ CheckedNumber, GameIsOver }) => {
  const initialGuess = GenerateRandomNumber(1, 100, CheckedNumber);
  const [CurrentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (CurrentGuess === CheckedNumber) {
      GameIsOver();
    }
  }, [CurrentGuess, CheckedNumber, GameIsOver]);

  function NextGuessHandler(Direction) {
    if (
      (Direction === "Lower" && CurrentGuess < CheckedNumber) ||
      (Direction === "Greater" && CurrentGuess > CheckedNumber)
    ) {
      Alert.alert(
        "hey yoo",
        "don't mess up with me I know that this is not the right number",
        [{ text: "sorry", style: "cancel" }]
      );
      return;
    }
    if (Direction === "Lower") {
      maxNumber = CurrentGuess;
    } else {
      minNumber = CurrentGuess + 1;
    }
    const NewRandomNum = GenerateRandomNumber(
      minNumber,
      maxNumber,
      CurrentGuess
    );
    setCurrentGuess(NewRandomNum);
  }

  return (
    <View style={styles.main}>
      <Title>Opponent's Guessing</Title>
      <NumberContainer>{CurrentGuess}</NumberContainer>
      <Card>
        <HeaderInstruction>Expect Higher or lower</HeaderInstruction>
        <View style={styles.ButtonsContainer}>
          <View style={styles.Buttons}>
            <Primarybutton onPress={NextGuessHandler.bind(this, "Lower")}>
              <AntDesign name="minuscircleo" size={24} color={Colors.primary100} />
            </Primarybutton>
          </View>
          <View style={styles.Buttons}>
            <Primarybutton onPress={NextGuessHandler.bind(this, "Higher")}>
              <AntDesign name="pluscircleo" size={24} color={Colors.primary100} />
            </Primarybutton>
          </View>
        </View>
      </Card>
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
  ButtonsContainer: {
    flexDirection: "row",
  },
  Buttons: {
    flex: 1,
  },
});
