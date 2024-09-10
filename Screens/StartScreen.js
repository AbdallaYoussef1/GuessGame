import { StyleSheet, TextInput, View } from "react-native";
import Primarybutton from "../Components/Primarybutton";

const StartScreen = () => {
  return (
    <View style={styles.main}>
      <TextInput style={styles.NumberInput} maxLength={2} />
      <Primarybutton>Confirm</Primarybutton>
      <Primarybutton>Reset</Primarybutton>
    </View>
  );
};
export default StartScreen;

const styles = StyleSheet.create({
    main:{
        backgroundColor: "#72063c",
        padding: 20,
        marginHorizontal:25,
        marginTop:100,
        borderRadius:12,
        elevation:10,

    },
    NumberInput:{
        height:30,
        width:40,
        fontSize:30,
        borderBottomColor:"#ddb53f",
        borderBottomWidth: 2,
        color:"#ddb53f",
        textAlign:"center",
        marginVertical:10,
        
    }
});
