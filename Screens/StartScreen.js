import { StyleSheet, TextInput, View, Alert} from "react-native";
import Primarybutton from "../Components/UI/Primarybutton";
import { useState } from "react";
import Colors from "../Constants/Colors";
import Title from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import HeaderInstruction from "../Components/UI/HeaderInstruction";

const StartScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function handleEnteredNumber(enteredValue) {
    setEnteredNumber(enteredValue);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function handleConfirmButton() {
    const EnteredNumber = parseInt(enteredNumber);

    if (isNaN(EnteredNumber) || EnteredNumber <= 0 || EnteredNumber > 99) {
      Alert.alert(
        "invalid Number",
        "the number that entered must be between the 1 and 99",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickedNumber(EnteredNumber);
  }

  return (
    <View style={styles.rootView}>
      <Title style={styles.TitleText}>Guess the number</Title>
      <Card>
        <HeaderInstruction style={styles.text}>Please Enter A number</HeaderInstruction>
        <View>
          <TextInput
            style={styles.NumberInput}
            maxLength={2}
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={handleEnteredNumber}
          />
        </View>
        <View style={styles.ButtonsContainer}>
          <View style={styles.Buttons}>
            <Primarybutton onPress={resetInputHandler}>Reset</Primarybutton>
          </View>
          <View style={styles.Buttons}>
            <Primarybutton onPress={handleConfirmButton}>Confirm</Primarybutton>
          </View>
        </View>
      </Card>
    </View>
  );
};
export default StartScreen;

const styles = StyleSheet.create({
  rootView: {
    marginTop: 100,
    flex: 1,
    alignItems: "center",
  },
  NumberInput: {
    height: 30,
    width: 40,
    fontSize: 30,
    borderBottomColor: Colors.primary100,
    borderBottomWidth: 2,
    color: Colors.primary100,
    textAlign: "center",
    marginVertical: 10,
  },
  ButtonsContainer: {
    flexDirection: "row",
  },
  Buttons: {
    flex: 1,
  },
});
