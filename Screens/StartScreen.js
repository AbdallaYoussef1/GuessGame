import { StyleSheet, TextInput, View, Alert } from "react-native";
import Primarybutton from "../Components/UI/Primarybutton";
import { useState } from "react";
import Colors from "../Constants/Colors";


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
    <View style={styles.main}>
      <View style={styles.InputContainer}>
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
    </View>
  );
};
export default StartScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary400,
    padding: 20,
    marginHorizontal: 25,
    marginTop: 100,
    borderRadius: 12,
    elevation: 10,
    justifyContent: "center",
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
