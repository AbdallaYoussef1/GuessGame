import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartScreen from "./Screens/StartScreen";
import MainScreen from "./Screens/MainScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function PickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartScreen onPickedNumber={PickedNumberHandler} />;
  if (userNumber) {
    screen = <MainScreen />;
  }
  return (
    <LinearGradient colors={["#72063c", "#ebc85d"]} style={styles.RootScreen}>
      <ImageBackground
        style={styles.RootScreen}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={styles.RootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  RootScreen: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.15,
  },
});
