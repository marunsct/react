import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet, Modal} from "react-native";

const GoalsInput = (props) => {

    const [goals, setgoals] = useState(props.egoal);
    const [id, setid] = useState(props.id);
    const onAddgoals = (text) => {
        console.log(props , goals, id, "hiiiii");
        setgoals(text);

      };
    const onButtonPress = () => {
        console.log(props , goals, id);
        props.onSave(goals, props.id);
        setgoals("");
    };
    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        < TextInput placeholder = {props.egoal}
        style = {styles.input}
        onChangeText = {onAddgoals}
        value={goals}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Save" onPress={onButtonPress}/>
            </View>
        </View>
      </View>
      </Modal>
    );

};

const styles = StyleSheet.create({
    inputContainer:{
     flex: 1,
      flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
      },
      buttonContainer: {
          // flex: 1,   
          flexDirection: "row",
          justifyContent: "space-evenly",
          // alignContent : "center",
          width: "60%",
      },
      input: {
      width: "80%",
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
      marginBottom: 20
      },
      button:{
          width : "40%"
      }
      
});

export default GoalsInput;