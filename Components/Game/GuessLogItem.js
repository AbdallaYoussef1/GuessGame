import { StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/Colors";

const GuessLogItem = ({RoundsNumber, Guess}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>#{RoundsNumber}</Text>
      <Text style={styles.text}>Opponent's Guess {Guess}</Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
    main:{
        borderColor: Colors.primary400,
        borderRadius:50,
        borderWidth:3,
        padding:15,
        marginVertical:8,
        backgroundColor: Colors.primary100,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:2,
        shadowColor:"black"
    },
    text:{
        fontSize:18
    }
});