import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet} from "react-native";

const GoalsInput = (props) => {

    const [goals, setgoals] = useState("");
    const onAddgoals = (text) => {
        setgoals(text);
      };
    const onButtonPress = () => {
        props.onAddhandler(goals);
        setgoals("");
    }
    return(
        <View style={styles.inputContainer}>
        < TextInput placeholder = "Course Goals"
        style = {styles.input}
        onChangeText = {onAddgoals}
        value={goals}/>
        <Button title="ADD" onPress={onButtonPress}/>
      </View>
    );

};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignContent:"center"
      },
      input: {
      width: "80%",
      borderColor: "black",
      borderWidth: 1,
      padding: 10
      }
      
});

export default GoalsInput;