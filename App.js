import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartScreen from "./Screens/StartScreen";
import MainScreen from "./Screens/MainScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./Constants/Colors";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [GameOver, setGameisOver] = useState(true);

  function PickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameisOver(false);
  }
  function onGameOverHandler() {
    setGameisOver(true);
  }

  let screen = <StartScreen onPickedNumber={PickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <MainScreen CheckedNumber={userNumber} GameIsOver={onGameOverHandler} />
    );
  }
  if (userNumber && GameOver) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.primary500]}
      style={styles.RootScreen}
    >
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
