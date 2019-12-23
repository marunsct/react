import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const ListItems = (props) => {

    return   (   
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}
                    onPress={props.onEdit.bind(this,props.id)}>  
        <View style = {styles.listitem}>
            <Text>{props.title}</Text>
        </View> 
     </TouchableOpacity> 
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