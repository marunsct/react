import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text, FlatList } from 'react-native';

// Custom Components
import ListItems from "./Components/Listitemview";
import GoalsInput from "./Components/GoalsInput";

export default function App() {
  // states declaration
  const [courseGoals, setCourseGoals] = useState([]);

// state handler declaration         

  const onAddhandler = (goals) =>{
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value:goals} ]);
    //setgoals("");
  
  };
    return (
    <View style={styles.screen}>
      <GoalsInput onAddhandler={onAddhandler}/>
      <FlatList 
        data={courseGoals}
        renderItem = {(itemData => 
            <ListItems title ={itemData.item.value} />
          )}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
screen: {
  padding : 50
}
});