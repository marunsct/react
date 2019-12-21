import React from "react";
import {Text, View, StyleSheet} from "react-native";

const ListItems = (props) => {

    return   (    
     <View style = {styles.listitem}>
        <Text>{props.title}</Text>
     </View> 
    );
};

const styles = StyleSheet.create({
    listitem:{
        padding : 10,
        marginVertical: 10,
        backgroundColor:"#ccc",
        borderColor : "black",
        borderWidth:1
      }
});

export default ListItems;