import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text, FlatList } from 'react-native';

// Custom Components
import ListItems from "./Components/Listitemview";
import GoalsInput from "./Components/GoalsInput";
import EditGoal from "./Components/EditGoal";

export default function App() {
  // states declaration
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setisVisible] = useState(false);

  const [editGoals, seteditGoals] = useState({});
  const [isEditable, setisEditable] = useState(false);

// state handler declaration         

  const onAddhandler = (goals) =>{
    setCourseGoals(currentGoals => {
      console.log(isVisible);
      console.log(currentGoals);
      return([...currentGoals, {id: Math.random().toString(), value:goals} ]);      
    }); 
    setisVisible(false);
  };

  const onDeleteItem = (id) =>{
    setCourseGoals( currentGoals => {
      return currentGoals.filter( goal => goal.id !== id );
    }) ;     
    };
    
    const onEditItem = (id) =>{
      seteditGoals( currentGoals => {
       // console.log(editGoals);
      //  console.log(courseGoals.filter( goal => goal.id == id )[0]);
        return (courseGoals.filter( goal => goal.id == id )[0]);
      }) ;  
      setisEditable(true);
      console.log(editGoals , "hii");
      };  

    const onEditGoal = (value,key) => {

      setCourseGoals(currentGoals => {
      console.log("made it to loop");
        for ( var i in currentGoals) {
          if (currentGoals[i].id === key) {
            currentGoals[i].value = value;
          }
        }
        console.log(currentGoals , value, key);
        return currentGoals;
      });
      setisEditable(false);

    };

    const onAddGoal = () => {
      setisVisible(true);
    };

    const onCancel = ()=>{
      console.log(isVisible);
      setisVisible(false);
    };

    return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={onAddGoal}/>
      <GoalsInput visible={isVisible} onAddhandler={onAddhandler} onCancel={onCancel}/>
      <EditGoal  id={editGoals.id} egoal={editGoals.value} visible={isEditable} onSave={onEditGoal} />
      <FlatList 
        data={courseGoals}
        renderItem = {(itemData => 
            <ListItems id={itemData.item.id} title ={itemData.item.value} onDelete={onDeleteItem} onEdit={onEditItem} />
          )}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
screen: {
  padding : 50
}
});